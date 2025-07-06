"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MatchingForm() {
  const [formData, setFormData] = useState({
    educationLevel: "",
    fieldOfStudy: "",
    gpa: 0,
    englishProficiency: { type: "ielts", score: 0 },
    workExperience: 0,
    budgetRange: [0, 50000],
    preferredCountries: [] as string[],
    careerGoals: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Implement form submission logic
  }

  const countries = [
    { id: "us", name: "ایالات متحده" },
    { id: "uk", name: "انگلستان" },
    { id: "ca", name: "کانادا" },
    { id: "au", name: "استرالیا" },
    { id: "de", name: "آلمان" },
    { id: "it", name: "ایتالیا" },
    { id: "fr", name: "فرانسه" },
    { id: "nl", name: "هلند" },
    { id: "se", name: "سوئد" },
    { id: "ch", name: "سوئیس" },
  ]

  const toggleCountry = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredCountries: prev.preferredCountries.includes(id)
        ? prev.preferredCountries.filter((item) => item !== id)
        : [...prev.preferredCountries, id],
    }))
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="education">اطلاعات تحصیلی</TabsTrigger>
              <TabsTrigger value="preferences">ترجیحات</TabsTrigger>
              <TabsTrigger value="goals">اهداف</TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">مقطع تحصیلی فعلی</label>
                  <Select
                    value={formData.educationLevel}
                    onValueChange={(value) => setFormData({ ...formData, educationLevel: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب مقطع تحصیلی" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high_school">دیپلم</SelectItem>
                      <SelectItem value="bachelor">کارشناسی</SelectItem>
                      <SelectItem value="master">کارشناسی ارشد</SelectItem>
                      <SelectItem value="phd">دکترا</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">رشته تحصیلی</label>
                  <Input
                    placeholder="مثال: مهندسی کامپیوتر"
                    value={formData.fieldOfStudy}
                    onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
                    className="text-right"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">معدل (از ۲۰)</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[formData.gpa]}
                    min={10}
                    max={20}
                    step={0.1}
                    onValueChange={(value) => setFormData({ ...formData, gpa: value[0] })}
                    className="flex-1"
                  />
                  <span className="w-12 text-center font-bold">{formData.gpa.toFixed(1)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium">مهارت زبان انگلیسی</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    value={formData.englishProficiency.type}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        englishProficiency: { ...formData.englishProficiency, type: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="نوع آزمون" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ielts">IELTS</SelectItem>
                      <SelectItem value="toefl">TOEFL</SelectItem>
                      <SelectItem value="duolingo">Duolingo</SelectItem>
                      <SelectItem value="none">بدون آزمون</SelectItem>
                    </SelectContent>
                  </Select>

                  {formData.englishProficiency.type !== "none" && (
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[formData.englishProficiency.score]}
                        min={0}
                        max={
                          formData.englishProficiency.type === "ielts"
                            ? 9
                            : formData.englishProficiency.type === "toefl"
                              ? 120
                              : 160
                        }
                        step={formData.englishProficiency.type === "ielts" ? 0.5 : 1}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            englishProficiency: { ...formData.englishProficiency, score: value[0] },
                          })
                        }
                        className="flex-1"
                      />
                      <span className="w-12 text-center font-bold">{formData.englishProficiency.score}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">سابقه کاری (سال)</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[formData.workExperience]}
                    min={0}
                    max={20}
                    step={1}
                    onValueChange={(value) => setFormData({ ...formData, workExperience: value[0] })}
                    className="flex-1"
                  />
                  <span className="w-12 text-center font-bold">{formData.workExperience}</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">بودجه سالانه (دلار)</label>
                <div className="space-y-4">
                  <Slider
                    value={formData.budgetRange}
                    min={0}
                    max={50000}
                    step={1000}
                    onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${formData.budgetRange[0].toLocaleString()}</span>
                    <span>${formData.budgetRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">کشورهای مورد علاقه</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {countries.map((country) => (
                    <div key={country.id} className="flex items-center space-x-2 space-x-reverse">
                      <Checkbox
                        id={`country-${country.id}`}
                        checked={formData.preferredCountries.includes(country.id)}
                        onCheckedChange={() => toggleCountry(country.id)}
                      />
                      <label
                        htmlFor={`country-${country.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {country.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">اهداف شغلی و تحصیلی</label>
                <Textarea
                  placeholder="لطفاً اهداف شغلی و تحصیلی خود را شرح دهید..."
                  value={formData.careerGoals}
                  onChange={(e) => setFormData({ ...formData, careerGoals: e.target.value })}
                  className="min-h-[150px] text-right"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="pt-4 border-t">
            <Button type="submit" className="w-full bg-[#FF6A5C] hover:bg-[#FF6A5C]/90 text-white text-lg py-3">
              دریافت نتایج تطبیق
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
