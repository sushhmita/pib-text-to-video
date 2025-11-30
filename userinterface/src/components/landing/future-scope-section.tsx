import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, UserCog, Accessibility, Building2 } from "lucide-react"

const futureScopes = [
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "AR/VR Integration",
    description: "Develop immersive experiences for press releases using Augmented and Virtual Reality.",
  },
  {
    icon: <UserCog className="h-8 w-8 text-primary" />,
    title: "Content Personalization",
    description: "Tailor video content based on user preferences, location, and interests.",
  },
  {
    icon: <Accessibility className="h-8 w-8 text-primary" />,
    title: "Enhanced Accessibility",
    description: "Incorporate sign language interpretation and advanced accessibility features.",
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "Cross-Ministry Adoption",
    description: "Expand the platform for use by various government ministries and departments.",
  },
]

export function FutureScopeSection() {
  return (
    <section id="future-scope" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Future Scope</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Envisioning Tomorrow</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our journey doesn&apos;t end here. We are constantly exploring new frontiers to make information more dynamic and accessible for everyone.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {futureScopes.map((scope, index) => (
            <Card key={index} className="h-full text-center transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="flex flex-col items-center gap-4">
                {scope.icon}
                <CardTitle>{scope.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{scope.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
