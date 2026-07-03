import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForYou from "@/components/ForYou";
import PainSection from "@/components/PainSection";
import SolutionBridge from "@/components/SolutionBridge";
import StepByStep from "@/components/StepByStep";
import WhatYouGet from "@/components/WhatYouGet";
import ValueAnchor from "@/components/ValueAnchor";
import PricingCTA from "@/components/PricingCTA";
import AuthorSection from "@/components/AuthorSection";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ForYou />
      <PainSection />
      <SolutionBridge />
      <StepByStep />
      <WhatYouGet />
      <ValueAnchor />
      <PricingCTA />
      <AuthorSection />
      <FinalCTA />
      <PricingCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
