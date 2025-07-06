import { ExamCard } from "@/components/cards/exam-card"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const exams = [
  {
    title: "IELTS",
    description: "The International English Language Testing System",
    href: "/international-exams/ielts",
  },
  {
    title: "TOEFL",
    description: "Test of English as a Foreign Language",
    href: "/international-exams/toefl",
  },
  {
    title: "PTE",
    description: "Pearson Test of English",
    href: "/international-exams/pte",
  },
  {
    title: "OET",
    description: "Occupational English Test",
    href: "/international-exams/oet",
  },
]

export default function InternationalExamsPage() {
  return (
    <>
      <Navbar />
      <main className="container relative h-screen">
        <div className="grid sm:grid-cols-1 md:grid-cols-4 mt-10 gap-4">
          <div className="col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Find Your Exam</CardTitle>
                <CardDescription>Choose the exam that suits your needs.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Exam Name</Label>
                      <Input id="name" placeholder="Exam Name" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Search</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="sm:col-span-1 md:col-span-3">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              {exams.map((exam) => (
                <ExamCard key={exam.title} title={exam.title} description={exam.description} href={exam.href} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
