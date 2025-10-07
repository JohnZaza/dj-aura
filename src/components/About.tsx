import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import djPhoto from "@/assets/dj-photo.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Soft background lights */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(20)].map((_, i) => (
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

      <div className="container mx-auto max-w-6xl relative">
        <div
          className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Photo */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent blur-3xl opacity-50" />
            <img
              src={djPhoto}
              alt="DJ John Ziaziaris"
              className="relative rounded-lg shadow-2xl w-96 h-auto object-cover border border-white/10"
            />
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light">
              {t("about.title")}{" "}
              <span className="text-primary font-normal">{t("about.me")}</span>
            </h2>

            <div className="w-16 h-px bg-primary" />

            <p className="text-base text-muted-foreground leading-relaxed font-light">
              {t("about.bio1")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              {t("about.bio2")}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              {t("about.bio3")}
            </p>

            <div className="pt-6 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-secondary/30 rounded-lg backdrop-blur-md">
                <div className="text-3xl font-light text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1 font-light">
                  {t("about.events")}
                </div>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-lg backdrop-blur-md">
                <div className="text-3xl font-light text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1 font-light">
                  {t("about.satisfaction")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
