import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(image => image.id === 'about-section');

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">About the Project</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unlocking Information for All</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our project aims to bridge the communication gap between government agencies and a diverse, multilingual populace. By converting text-based press releases into engaging videos, we make vital information more accessible, understandable, and shareable.
            </p>
          </div>
          <Image
            src={aboutImage?.imageUrl || "https://picsum.photos/seed/1/600/400"}
            alt="About AI News Studio"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            data-ai-hint={aboutImage?.imageHint || "abstract ai"}
          />
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 mt-12 md:mt-24">
          <Card>
            <CardHeader>
              <CardTitle>Problem Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Official government press releases are often text-heavy and published in a limited number of languages, creating barriers to comprehension and reach for a significant portion of the population.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Automate the creation of video summaries from PIB press releases.</li>
                <li>Provide multilingual audio narration for wider accessibility.</li>
                <li>Generate contextually relevant visuals to enhance engagement.</li>
                <li>Streamline the distribution of information across social media.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
