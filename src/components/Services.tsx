import { useEffect, useRef, useState } from "react";
import { Heart, Sparkles, PartyPopper } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Create the perfect romantic atmosphere for your special day with curated playlists and seamless transitions",
  },
  {
    icon: Sparkles,
    title: "Baptisms",
    description: "Celebrate new beginnings with elegant music selections that honor tradition while keeping guests entertained",
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    description: "Transform any celebration into an unforgettable experience with high-energy sets and professional lighting",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="services" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Event <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional DJ services tailored to make your celebration extraordinary
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "0.6s" }}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold mb-2">Professional Equipment</h4>
              <p className="text-sm text-muted-foreground">High-quality sound systems and mixers</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Lighting & Effects</h4>
              <p className="text-sm text-muted-foreground">Dynamic lights, fog machines, and more</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Custom Playlists</h4>
              <p className="text-sm text-muted-foreground">Tailored to your event and preferences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
