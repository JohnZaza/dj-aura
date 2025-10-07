import { useState, useEffect, useRef } from "react";
import { Music, Volume2, VolumeX, Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";
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
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => setIsVisible(true), []);

  // Gentle 3D hover motion
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = logo.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      logo.style.transform = `rotateY(${x / 30}deg) rotateX(${-y / 30}deg) scale(1.05)`;
    };
    const reset = () => {
      logo.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    };

    logo.addEventListener("mousemove", handleMouseMove);
    logo.addEventListener("mouseleave", reset);
    return () => {
      logo.removeEventListener("mousemove", handleMouseMove);
      logo.removeEventListener("mouseleave", reset);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/ziaziaris_giannis/?hl=el", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/ziaziaris", label: "Facebook" },
    // { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Floating ambient dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary rounded-full animate-pulse"
            style={{
              width: "2px",
              height: "2px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: "4s",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* LOGO */}
        <div className="flex justify-center mb-16">
          <div ref={logoRef} className="relative group transition-transform duration-300 ease-out">
            {/* Outer glow + motion shimmer */}
            <div className="absolute -inset-10 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 blur-3xl opacity-60 animate-[pulse_6s_infinite]" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-lg animate-[shine_5s_linear_infinite]" />
            <img
              src={logoDark}
              alt="DJ John Ziaziaris"
              className="relative h-56 md:h-72 lg:h-80 object-contain transition-transform duration-700 ease-out drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]"
            />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-wide">
          {t("hero.tagline")}
          <span className="block text-primary mt-2 font-medium">{t("hero.experience")}</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
          {t("hero.description")}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base font-normal shadow-soft hover:shadow-lg hover:scale-105 transition-all"
            onClick={() => scrollToSection("contact")}
          >
            {t("hero.bookEvent")}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/10 px-10 py-6 text-base font-normal hover:scale-105 transition-all"
            onClick={() => scrollToSection("about")}
          >
            {t("hero.learnMore")}
          </Button>
        </div>

        {/* MUSIC CONTROL */}
        <div className="mt-16 flex items-center justify-center gap-3 text-muted-foreground">
          <Music className="w-4 h-4" />
          <button
            onClick={onToggleMute}
            className="flex items-center gap-2 hover:text-primary transition-colors text-sm font-light"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span>{isMuted ? t("hero.unmuteMusic") : t("hero.muteMusic")}</span>
          </button>
        </div>

        {/* CONTACT BAR (Social + Phone + Email) */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-muted-foreground font-light">
          {/* Social Icons */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:text-primary transition-all"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Email */}
          <a
            href="mailto:djziaziaris@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>djziaziaris@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+306973643262"
            className="flex items-center gap-2 hover:text-primary transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>+30 697 364 3262</span>
          </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-5 h-8 border border-primary/40 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-primary rounded-full mt-2" />
        </div>
      </div>

      {/* Logo Shine Animation */}
      <style>{`
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
