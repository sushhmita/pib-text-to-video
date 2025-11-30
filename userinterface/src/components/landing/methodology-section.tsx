import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, Languages, Image as ImageIcon, CheckCircle2, Send } from "lucide-react"

const pipelineSteps = [
  {
    icon: <Newspaper className="h-8 w-8 text-primary" />,
    title: "Summarization",
    description: "AI models process and summarize lengthy press releases into key points.",
  },
  {
    icon: <Languages className="h-8 w-8 text-primary" />,
    title: "Translation",
    description: "The summary is translated into multiple languages for broader reach.",
  },
  {
    icon: <ImageIcon className="h-8 w-8 text-primary" />,
    title: "Visual Generation",
    description: "GANs create a sequence of relevant visuals based on the translated text.",
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    title: "Officer Approval",
    description: "A manual review stage ensures accuracy and appropriateness of the final video.",
  },
  {
    icon: <Send className="h-8 w-8 text-primary" />,
    title: "Publishing",
    description: "The approved video is automatically published to designated platforms.",
  },
];

export function MethodologySection() {
  return (
    <section id="methodology" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Methodology</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our 5-Step Pipeline</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We follow a systematic and robust process to convert press releases into engaging videos, ensuring quality and accuracy at every stage.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {pipelineSteps.map((step, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="bg-secondary p-3 rounded-full">
                    {step.icon}
                </div>
                <CardTitle className="text-base font-semibold">{index + 1}. {step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
