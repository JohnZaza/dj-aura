import { useState, useEffect } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logoDark from "@/assets/logo-dark.png";

interface HeroProps {
  isMuted: boolean;
  onToggleMute: () => void;
}

const Hero = ({ isMuted, onToggleMute }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30">
      {/* Content */}
      <div className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex justify-center mb-12 animate-fade-in">
          <img 
            src={logoDark} 
            alt="DJ John Ziaziaris" 
            className="h-20 md:h-24 object-contain"
          />
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {t("hero.tagline")}
          <span className="block text-primary mt-2 font-medium">{t("hero.experience")}</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-normal shadow-soft transition-all hover:shadow-lg"
            onClick={() => scrollToSection("contact")}
          >
            {t("hero.bookEvent")}
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/5 px-8 py-6 text-base font-normal transition-all"
            onClick={() => scrollToSection("about")}
          >
            {t("hero.learnMore")}
          </Button>
        </div>

        {/* Music control */}
        <div className="mt-16 flex items-center justify-center gap-3 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Music className="w-4 h-4" />
          <button
            onClick={onToggleMute}
            className="flex items-center gap-2 hover:text-primary transition-colors text-sm font-light"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span>{isMuted ? t("hero.unmuteMusic") : t("hero.muteMusic")}</span>
          </button>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-5 h-8 border border-primary/40 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
