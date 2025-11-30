import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] max-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-700 to-accent opacity-90"></div>
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-repeat [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
        <div className="container relative px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    AI News Studio
                </h1>
                <p className="text-lg text-primary-foreground/90 md:text-xl">
                    Transforming Government Communication with AI-driven Multilingual Video Automation
                </p>
            </div>
            <div className="mt-8 flex justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                    <Link href="#https://github.com/sushhmita/pib-text-to-video">
                        <Github className="mr-2 h-5 w-5" />
                        View GitHub
                    </Link>
                </Button>
                <Button asChild size="lg">
                    <Link href="#">
                        <FileText className="mr-2 h-5 w-5" />
                        Read Paper
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  )
}
