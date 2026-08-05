import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ToWhom from "@/components/sections/ToWhom";
import Why from "@/components/sections/Why";
import Support from "@/components/sections/Support";
import Letter from "@/components/sections/Letter";
import Founder from "@/components/sections/Founder";
import PortalTeaser from "@/components/sections/PortalTeaser";
import CallCta from "@/components/sections/CallCta";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ToWhom />
        <Why />
        <Support />
        <Letter />
        <Founder />
        <PortalTeaser />
        <CallCta />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
