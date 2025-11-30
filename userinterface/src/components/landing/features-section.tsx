import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cog, Languages, Sparkles, PersonStanding, Share2, Bot } from "lucide-react"

const features = [
  {
    icon: <Cog className="h-8 w-8 text-primary" />,
    title: "Automation",
    description: "End-to-end automated pipeline from text summarization to video publishing.",
  },
  {
    icon: <Languages className="h-8 w-8 text-primary" />,
    title: "Multilingual Narration",
    description: "Supports multiple languages to reach a diverse, multilingual audience.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "GAN-based Visuals",
    description: "AI-powered generation of relevant and engaging visuals from text content.",
  },
  {
    icon: <PersonStanding className="h-8 w-8 text-primary" />,
    title: "Enhanced Accessibility",
    description: "Improves information access for people with visual impairments or reading difficulties.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: "Social Media Publishing",
    description: "Directly publish generated videos to various social media platforms.",
  },
    {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI Summarization",
    description: "Transformer-based models distill long press releases into concise summaries.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Project Offers</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore the innovative features that make our AI-powered video conversion tool a game-changer for government communication.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
