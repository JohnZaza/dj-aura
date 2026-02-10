import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import djPhoto from "@/assets/dj-photo.jpg";
import djIllustration from "@/assets/dj-illustration.jpg";

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
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(30)].map((_, i) => (
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
          {/* Photos/Illustration Container */}
          <div className="relative flex justify-center items-center">
            {/* Background decorative elements */}
            <div className="absolute inset-x-0 inset-y-0 bg-primary/5 blur-3xl rounded-full opacity-30 pointer-events-none" />

            {/* Vinyl Record Visual */}
            <div className="relative group perspective-1000">
              <div className="vinyl-record w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-transform duration-700 group-hover:rotate-[30deg]">
                <img
                  src={djPhoto}
                  alt="DJ John Ziaziaris"
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="vinyl-grooves" />
                <div className="vinyl-gloss" />
                <div className="vinyl-center" />
              </div>

              {/* Floating label/accent */}
              <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-premium transform -rotate-3 transition-transform group-hover:rotate-0">
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">The Artist</span>
              </div>
            </div>
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
