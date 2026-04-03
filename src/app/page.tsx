import { About } from "@/components/about";
import { Description } from "@/components/description";
import Footer from "@/components/footer";
import OurClint from "@/components/our-client";
import { Project } from "@/components/project";
import Reviews from "@/components/reviews";
import { Services } from "@/components/services";
import WebPrice from "@/components/web-price";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="bg-black">
      <main>
        <Hero />
        <OurClint />
        <About />
        <Project />
        <Services />
        <WebPrice />
        <Reviews />
        <Description />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
