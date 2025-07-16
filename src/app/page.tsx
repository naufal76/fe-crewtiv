

import { About } from "@/components/About";
import { Description } from "@/components/description";
import Footer from "@/components/footer";
import OurClint from "@/components/OurClient";
import { Project } from "@/components/Project";
import Reviews from "@/components/reviews";
import { Services } from "@/components/services";
import WebPrice from "@/components/web-price";
import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import HowToWebsite from "@/components/how-to-web";
import WhyCrewtiv from "@/components/whycrewtiv";

export default function Home() {
  return (
    <div className="bg-black">
      <main>
        <AnimatedSection> <Hero/> </AnimatedSection>
        <AnimatedSection><OurClint/></AnimatedSection>
        <AnimatedSection><About/></AnimatedSection>
        <AnimatedSection><Project/></AnimatedSection>
        <AnimatedSection><Services/></AnimatedSection>
        <AnimatedSection><WebPrice/></AnimatedSection>
        <AnimatedSection><HowToWebsite/></AnimatedSection>
        <AnimatedSection><WhyCrewtiv/></AnimatedSection>
        <AnimatedSection><Reviews/></AnimatedSection>
       
        <AnimatedSection><Description/></AnimatedSection>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
