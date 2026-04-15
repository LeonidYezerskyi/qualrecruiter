import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Hero } from "@/components/Hero";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { OurApproachSection } from "@/components/OurApproachSection";
import { ResultsYouCanExpectSection } from "@/components/ResultsYouCanExpectSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { WhoWeServeSection } from "@/components/WhoWeServeSection";
import { WhyQualRecruiterSection } from "@/components/WhyQualRecruiterSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ServicesSection />
        <HowItWorksSection />
        <WhyQualRecruiterSection />
        <WhoWeServeSection />
        <OurApproachSection />
        <ResultsYouCanExpectSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
