import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, FileText, ArrowRight } from "lucide-react"

const references = [
  "Vaswani, A., et al. (2017). Attention is All You Need. NIPS.",
  "Goodfellow, I., et al. (2014). Generative Adversarial Nets. NIPS.",
  "Devlin, J., et al. (2018). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. NAACL.",
]

export function PublicationsSection() {
  return (
    <section id="publications" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Publications</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Read Our Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Dive deeper into our project's technical details, code, and research findings.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
            <div className="grid gap-6">
                <Card className="hover:border-primary/50 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">GitHub Repository</CardTitle>
                        <Github className="h-6 w-6 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <CardDescription>Explore the source code, contribute to the project, or try it out yourself.</CardDescription>
                        <Button asChild variant="link" className="px-0">
                            <Link href="#https://github.com/sushhmita/pib-text-to-video">View on GitHub <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </CardContent>
                </Card>
                 <Card className="hover:border-primary/50 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-medium">IEEE Research Paper</CardTitle>
                        <FileText className="h-6 w-6 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <CardDescription>Read our published paper for a comprehensive academic overview.</CardDescription>
                        <Button asChild variant="link" className="px-0">
                            <Link href="#">Read Paper <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold">References</h3>
                <ul className="space-y-3 text-muted-foreground">
                    {references.map((ref, index) => (
                    <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 text-primary">●</span>
                        <span>{ref}</span>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  )
}
