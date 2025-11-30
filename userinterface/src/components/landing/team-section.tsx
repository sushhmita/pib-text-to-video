import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaceHolderImages } from '@/lib/placeholder-images';

const supervisor = {
  name: "Ms. Josephine R",
  role: "Project Supervisor, Presidency University",
  image: PlaceHolderImages.find(image => image.id === 'team-supervisor'),
};

const teamMembers = [
  {
    name: "Sushmita S M",
    role: "Full-Stack Developer",
    image: PlaceHolderImages.find(image => image.id === 'team-member-1'),
  },
  {
    name: "Ruchita R",
    role: "UI/UX Designer",
    image: PlaceHolderImages.find(image => image.id === 'team-member-2'),
  },
  {
    name: "Ainan Hafiz S",
    role: "Data Scientist",
    image: PlaceHolderImages.find(image => image.id === 'team-member-3'),
  },
];

export function TeamSection() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Minds Behind the Project</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A passionate group of students and faculty from Presidency University dedicated to innovation.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 flex flex-col items-center">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Our Supervisor</h3>
            <Card className="max-w-sm">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={supervisor.image?.imageUrl || "https://picsum.photos/seed/2/200/200"} alt={supervisor.name} data-ai-hint={supervisor.image?.imageHint || "professional portrait"} />
                        <AvatarFallback>{supervisor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                        <p className="text-lg font-semibold">{supervisor.name}</p>
                        <p className="text-sm text-muted-foreground">{supervisor.role}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:gap-12 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center transition-transform duration-300 hover:scale-105">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={member.image?.imageUrl || "https://picsum.photos/seed/3/200/200"} alt={member.name} data-ai-hint={member.image?.imageHint || "person smiling"} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                    <p className="text-lg font-semibold">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
