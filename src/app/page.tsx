import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import PainSection from "@/components/PainSection";
import SolutionBridge from "@/components/SolutionBridge";
import StepByStep from "@/components/StepByStep";
import WhatYouGet from "@/components/WhatYouGet";
import ForYou from "@/components/ForYou";
import ValueAnchor from "@/components/ValueAnchor";
import PricingCTA from "@/components/PricingCTA";
import UrgencySection from "@/components/UrgencySection";
import AuthorSection from "@/components/AuthorSection";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <PainSection />
      <SolutionBridge />
      <StepByStep />
      <WhatYouGet />
      <ForYou />
      <ValueAnchor />
      <PricingCTA />
      <UrgencySection />
      <AuthorSection />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
