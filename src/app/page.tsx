import Image from "next/image";
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

      {/* Imagem antes/depois: sobe para dentro do Hero (80%) e fica 20% sobre o branco */}
      <div className="relative z-20 -mt-[175px] sm:-mt-[346px] md:-mt-[419px] lg:-mt-[437px] flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/antes-depois.png"
            alt="Antes e depois: casa desorganizada transformada em lar organizado"
            width={900}
            height={640}
            className="object-cover w-full"
            priority
          />
        </div>
      </div>

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
