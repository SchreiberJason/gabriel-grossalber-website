import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifest from "@/components/Manifest";
import Trust from "@/components/Trust";
import About from "@/components/About";
import Services from "@/components/Services";
import Beliefs from "@/components/Beliefs";
import Process from "@/components/Process";
import Voices from "@/components/Voices";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifest />
        <Trust />
        <About />
        <Services />
        <Beliefs />
        <Process />
        <Voices />
        <FAQ />
        <Location />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
