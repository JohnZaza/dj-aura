import { useEffect, useRef, useState } from "react";
import djPhoto from "@/assets/dj-photo.jpg";

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto max-w-6xl">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Photo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
            <img
              src={djPhoto}
              alt="DJ John Ziaziaris"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="w-20 h-1 bg-primary" />

            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience in creating unforgettable moments, I specialize in reading the room and delivering the perfect soundtrack for your special occasions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From intimate baptisms to grand weddings and exclusive private parties, I bring professional-grade equipment, lighting, and special effects to transform your event into an extraordinary experience.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My passion is crafting the perfect atmosphere through music, ensuring every moment resonates with your guests and creates memories that last a lifetime.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Events</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
