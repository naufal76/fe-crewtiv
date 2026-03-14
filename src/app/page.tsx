

import { About } from "@/components/About";
import { Description } from "@/components/description";
import Footer from "@/components/footer";
import OurClint from "@/components/OurClient";
import { Project } from "@/components/Project";
import Reviews from "@/components/reviews";
import { Services } from "@/components/services";
import WebPrice from "@/components/web-price";
<<<<<<< HEAD
import Hero from "@/components/Hero";
=======
import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import HowToWebsite from "@/components/how-to-web";
import WhyCrewtiv from "@/components/whycrewtiv";
>>>>>>> dbf4a72b09bcb536f92e48111dfc6e42b624a4a9

export default function Home() {
  return (
    <div className="bg-black">
      <main>
<<<<<<< HEAD
        <Hero/>
        <OurClint/>
        <About/>
        <Project/>
        <Services/>
        <WebPrice/>
        <Reviews/>
        <Description/>
=======
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
>>>>>>> dbf4a72b09bcb536f92e48111dfc6e42b624a4a9
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
