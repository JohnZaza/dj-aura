import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactSchema.parse(formData);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t("contact.success.title"),
        description: t("contact.success.description"),
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: t("contact.error.title"),
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            {t("contact.title")} <span className="text-primary font-normal">{t("contact.unforgettable")}</span>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">
            {t("contact.description")}
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-light">
                {t("contact.name")} *
              </label>
              <Input
                id="name"
                type="text"
                placeholder={t("contact.name")}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-border focus:border-primary transition-colors font-light"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-light">
                {t("contact.email")} *
              </label>
              <Input
                id="email"
                type="email"
                placeholder={t("contact.email")}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card border-border focus:border-primary transition-colors font-light"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-light">
              {t("contact.phone")} *
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder={t("contact.phone")}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-card border-border focus:border-primary transition-colors font-light"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-light">
              {t("contact.message")} *
            </label>
            <Textarea
              id="message"
              placeholder={t("contact.placeholder.message")}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-card border-border focus:border-primary transition-colors min-h-[150px] font-light"
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-soft hover:shadow-lg font-normal"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? t("contact.sending") : t("contact.send")}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
