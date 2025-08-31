import { OpenAI } from "openai"
import type { University } from "@/lib/universities/api"
import type { UserProfile } from "@/lib/auth/supabase-auth"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface MatchResult {
  university: University
  score: number
  reasoning: string
  strengths: string[]
  concerns: string[]
  recommendations: string[]
}

export class AIMatchingService {
  async generateMatches(userProfile: UserProfile, universities: University[], limit = 10): Promise<MatchResult[]> {
    try {
      const prompt = this.buildMatchingPrompt(userProfile, universities)

      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content:
              "You are an expert education counselor specializing in international university admissions. Analyze student profiles and university requirements to provide accurate matching scores and detailed recommendations.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.3,
        max_tokens: 4000,
      })

      const aiResponse = response.choices[0].message.content
      if (!aiResponse) {
        throw new Error("No response from AI")
      }

      return this.parseAIResponse(aiResponse, universities)
    } catch (error) {
      console.error("AI matching error:", error)
      return this.generateFallbackMatches(userProfile, universities, limit)
    }
  }

  private buildMatchingPrompt(userProfile: UserProfile, universities: University[]): string {
    return `
Analyze this student profile and rank the following universities by compatibility:

STUDENT PROFILE:
- Education Level: ${userProfile.education_level || "Not specified"}
- Field of Study: ${userProfile.field_of_study || "Not specified"}
- GPA: ${userProfile.gpa || "Not specified"}
- Budget Range: $${userProfile.budget_min || 0} - $${userProfile.budget_max || "unlimited"}
- Preferred Countries: ${userProfile.preferred_countries?.join(", ") || "Any"}
- Language Scores: ${JSON.stringify(userProfile.language_scores || {})}
- Country: ${userProfile.country || "Not specified"}

UNIVERSITIES TO EVALUATE:
${universities
  .slice(0, 20)
  .map(
    (uni, index) => `
${index + 1}. ${uni.name} (${uni.country})
   - Type: ${uni.type}
   - Tuition: $${uni.tuition_fee_min} - $${uni.tuition_fee_max}
   - Ranking: #${uni.ranking}
   - Min GPA: ${uni.requirements?.gpa_min || "Not specified"}
   - Language Requirements: ${JSON.stringify(uni.requirements?.language_requirements || {})}
   - Programs: ${uni.programs.slice(0, 5).join(", ")}
   - Languages: ${uni.language_of_instruction.join(", ")}
   - Acceptance Rate: ${uni.acceptance_rate}%
`,
  )
  .join("")}

For each university, provide:
1. Match score (0-100)
2. Brief reasoning (2-3 sentences)
3. Top 3 strengths for this match
4. Top 2 concerns or challenges
5. 2-3 specific recommendations

Format as JSON array:
[
  {
    "universityName": "University Name",
    "score": 85,
    "reasoning": "Brief explanation...",
    "strengths": ["strength1", "strength2", "strength3"],
    "concerns": ["concern1", "concern2"],
    "recommendations": ["rec1", "rec2", "rec3"]
  }
]
`
  }

  private parseAIResponse(aiResponse: string, universities: University[]): MatchResult[] {
    try {
      const jsonMatch = aiResponse.match(/\[[\s\S]*\]/)
      if (!jsonMatch) {
        throw new Error("No JSON found in AI response")
      }

      const matches = JSON.parse(jsonMatch[0])

      return matches
        .map((match: any) => {
          const university = universities.find(
            (uni) =>
              uni.name.toLowerCase().includes(match.universityName.toLowerCase()) ||
              match.universityName.toLowerCase().includes(uni.name.toLowerCase()),
          )

          if (!university) {
            return null
          }

          return {
            university,
            score: Math.min(100, Math.max(0, match.score)),
            reasoning: match.reasoning || "Good match based on your profile",
            strengths: match.strengths || [],
            concerns: match.concerns || [],
            recommendations: match.recommendations || [],
          }
        })
        .filter(Boolean)
        .sort((a: MatchResult, b: MatchResult) => b.score - a.score)
    } catch (error) {
      console.error("Error parsing AI response:", error)
      throw error
    }
  }

  private generateFallbackMatches(userProfile: UserProfile, universities: University[], limit: number): MatchResult[] {
    return universities
      .slice(0, limit)
      .map((university) => {
        let score = 50 // Base score

        // Budget matching
        if (userProfile.budget_max && university.tuition_fee_min) {
          if (university.tuition_fee_min <= userProfile.budget_max) {
            score += 20
          } else {
            score -= 15
          }
        }

        // Country preference
        if (userProfile.preferred_countries?.includes(university.country)) {
          score += 15
        }

        // GPA matching
        if (userProfile.gpa && university.requirements?.gpa_min) {
          if (userProfile.gpa >= university.requirements.gpa_min) {
            score += 10
          } else {
            score -= 20
          }
        }

        // Language requirements
        if (userProfile.language_scores && university.requirements?.language_requirements) {
          const hasRequiredScores = Object.entries(university.requirements.language_requirements).every(
            ([test, required]) => {
              const userScore = userProfile.language_scores?.[test]
              return userScore ? userScore >= required : false
            },
          )

          if (hasRequiredScores) {
            score += 15
          } else {
            score -= 10
          }
        }

        // Ranking bonus (higher ranking = lower number = better)
        if (university.ranking && university.ranking <= 100) {
          score += 10
        }

        score = Math.min(100, Math.max(0, score))

        return {
          university,
          score,
          reasoning: `Match score based on budget compatibility, academic requirements, and preferences.`,
          strengths: [
            university.type === "public"
              ? "Public university with lower costs"
              : "Private university with specialized programs",
            `Located in ${university.country}`,
            `Offers ${university.programs.length} different programs`,
          ],
          concerns: [
            userProfile.budget_max && university.tuition_fee_min && university.tuition_fee_min > userProfile.budget_max
              ? "Tuition may exceed your budget"
              : "Competitive admission process",
            "Language requirements may need preparation",
          ],
          recommendations: [
            "Prepare required documents early",
            "Consider language test preparation",
            "Research scholarship opportunities",
          ],
        }
      })
      .sort((a, b) => b.score - a.score)
  }
}

export const aiMatchingService = new AIMatchingService()
