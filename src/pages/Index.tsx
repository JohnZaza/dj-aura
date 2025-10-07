import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";

const Index = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="min-h-screen">
      <AudioPlayer isMuted={isMuted} />
      <Hero isMuted={isMuted} onToggleMute={() => setIsMuted(!isMuted)} />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
