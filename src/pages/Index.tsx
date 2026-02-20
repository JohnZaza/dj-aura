import { useState } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <LanguageToggle />
        <AudioPlayer isMuted={isMuted} />
        <Hero isMuted={isMuted} onToggleMute={() => setIsMuted(!isMuted)} />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
