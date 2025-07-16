

import { About } from "@/components/About";
import { Description } from "@/components/description";
import Footer from "@/components/footer";
import OurClint from "@/components/OurClient";
import { Project } from "@/components/Project";
import RecentBlog from "@/components/recent-blog";
import Reviews from "@/components/reviews";
import { Services } from "@/components/services";
import WebPrice from "@/components/web-price";
import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";

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
        <AnimatedSection><Reviews/></AnimatedSection>
        <AnimatedSection><RecentBlog/></AnimatedSection>
        <AnimatedSection><Description/></AnimatedSection>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
