import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function VisaServicesPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Main Content Area */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Visa Services</CardTitle>
              <CardDescription>
                Explore our comprehensive visa services to facilitate your travel needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We offer a range of visa services to cater to various travel purposes, including tourism, business,
                education, and immigration. Our experienced team provides expert guidance and support throughout the
                visa application process, ensuring a smooth and hassle-free experience.
              </p>
              <br />
              <p>
                Whether you need assistance with visa requirements, document preparation, or interview preparation, we
                are here to help. Contact us today to learn more about our visa services and how we can assist you with
                your travel plans.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
