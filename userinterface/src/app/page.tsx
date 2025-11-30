import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { MethodologySection } from "@/components/landing/methodology-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { TeamSection } from "@/components/landing/team-section";
import { PublicationsSection } from "@/components/landing/publications-section";
import { FutureScopeSection } from "@/components/landing/future-scope-section";
import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MethodologySection />
        <FeaturesSection />
        <TeamSection />
        <PublicationsSection />
        <FutureScopeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
