import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface UserProfile {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  phone?: string
  country?: string
  education_level?: string
  field_of_study?: string
  gpa?: number
  budget_min?: number
  budget_max?: number
  preferred_countries?: string[]
  language_scores?: Record<string, number>
  linkedin_data?: any
  created_at: string
  updated_at: string
  email_verified: boolean
}

export const authService = {
  async signUp(email: string, password: string, fullName: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })
    return { data, error }
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  },

  async signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    return { data, error }
  },

  async signInWithLinkedIn() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "linkedin",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    return { data, error }
  },

  async signOut() {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  async resetPassword(email: string) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })
    return { data, error }
  },

  async updateProfile(userId: string, updates: Partial<UserProfile>) {
    const { data, error } = await supabase.from("user_profiles").update(updates).eq("id", userId).select().single()
    return { data, error }
  },

  async getProfile(userId: string) {
    const { data, error } = await supabase.from("user_profiles").select("*").eq("id", userId).single()
    return { data, error }
  },
}
