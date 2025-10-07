import { useState, useEffect } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";

interface HeroProps {
  isMuted: boolean;
  onToggleMute: () => void;
}

const Hero = ({ isMuted, onToggleMute }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex justify-center mb-8 animate-fade-in">
          <img 
            src={logoWhite} 
            alt="DJ John Ziaziaris" 
            className="h-24 md:h-32 object-contain"
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Elevate Your
          <span className="block text-primary mt-2">Experience</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Professional DJ services for weddings, private parties, baptisms, and every celebration that deserves the perfect soundtrack
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
            onClick={() => scrollToSection("contact")}
          >
            Book Your Event
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </Button>
        </div>

        {/* Music control */}
        <div className="mt-16 flex items-center justify-center gap-3 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Music className="w-5 h-5" />
          <button
            onClick={onToggleMute}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            <span className="text-sm">{isMuted ? "Unmute Background Music" : "Mute Background Music"}</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
