import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { PortfolioSection } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { FloraIllustrationTop } from "@/components/sections/FloraIllustration";

export default function Home() {
  return (
    <main>
      <Hero />
      <FloraIllustrationTop />
      <About />
      <Services />
      <PortfolioSection />
      <Contact />
    </main>
  );
}
