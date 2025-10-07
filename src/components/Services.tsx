import { useEffect, useRef, useState } from "react";
import { Heart, Sparkles, PartyPopper } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const services = [
    {
      icon: Heart,
      title: t("services.weddings"),
      description: t("services.weddings.desc"),
    },
    {
      icon: Sparkles,
      title: t("services.baptisms"),
      description: t("services.baptisms.desc"),
    },
    {
      icon: PartyPopper,
      title: t("services.parties"),
      description: t("services.parties.desc"),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            {t("services.title")} <span className="text-primary font-normal">{t("services.events")}</span>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">
            {t("services.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 bg-card rounded-lg shadow-soft hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-normal mb-4 text-primary">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed font-light text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-16 p-8 bg-primary/5 rounded-lg transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "0.5s" }}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-base font-normal mb-2">{t("services.equipment")}</h4>
              <p className="text-sm text-muted-foreground font-light">{t("services.equipment.desc")}</p>
            </div>
            <div>
              <h4 className="text-base font-normal mb-2">{t("services.lighting")}</h4>
              <p className="text-sm text-muted-foreground font-light">{t("services.lighting.desc")}</p>
            </div>
            <div>
              <h4 className="text-base font-normal mb-2">{t("services.playlists")}</h4>
              <p className="text-sm text-muted-foreground font-light">{t("services.playlists.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
