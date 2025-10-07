import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  phone: z.string().trim().min(1, "Mobile phone is required"),
  email: z.string().trim().email("Invalid email address").optional(),
  eventType: z.string().trim().min(1, "Event type is required"),
  eventDate: z.string().trim().min(1, "Event date is required"),
  location: z.string().trim().min(1, "Location is required"),
  people: z.string().optional(),
  extras: z.array(z.string()).optional(),
  message: z.string().optional(),
});

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    location: "",
    people: "",
    extras: [] as string[],
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCheckbox = (value: string) => {
    setFormData((prev) => {
      const exists = prev.extras.includes(value);
      return {
        ...prev,
        extras: exists ? prev.extras.filter((v) => v !== value) : [...prev.extras, value],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactSchema.parse(formData);

      // 🧾 Build a clean message summary
      const formattedMessage = `
New Event Request from your DJ site:

🎤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email || "Not provided"}
🎉 Event Type: ${formData.eventType}
📅 Event Date: ${formData.eventDate}
📍 Location: ${formData.location}
👥 Guests (approx): ${formData.people || "Not specified"}
✨ Extras: ${formData.extras.length ? formData.extras.join(", ") : "None"}
📝 Additional Info:
${formData.message || "No additional message."}
    `.trim();

      // Prepare payload for Formspree
      const data = new FormData();
      data.append("subject", `New Event Inquiry from ${formData.name}`);
      data.append("message", formattedMessage);

      // You can still append all fields if you want them visible in Formspree dashboard:
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          data.append(key, value.join(", "));
        } else {
          data.append(key, value);
        }
      });

      // Send to Formspree
      const response = await fetch("https://formspree.io/f/meorlagb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({
          title: t("contact.success.title"),
          description: t("contact.success.description"),
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
          eventType: "",
          eventDate: "",
          location: "",
          people: "",
          extras: [],
          message: "",
        });
      } else {
        toast({
          title: t("contact.error.title"),
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: t("contact.error.title"),
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: t("contact.error.title"),
          description: "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   try {
  //     contactSchema.parse(formData);

  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     toast({
  //       title: t("contact.success.title"),
  //       description: t("contact.success.description"),
  //     });

  //     setFormData({
  //       name: "",
  //       phone: "",
  //       email: "",
  //       eventType: "",
  //       eventDate: "",
  //       location: "",
  //       people: "",
  //       extras: [],
  //       message: "",
  //     });
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       toast({
  //         title: t("contact.error.title"),
  //         description: error.errors[0].message,
  //         variant: "destructive",
  //       });
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            {t("contact.title")}{" "}
            <span className="text-primary font-normal">{t("contact.unforgettable")}</span>
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light">
            {t("contact.description")}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {/* Name & Phone */}
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
                required
              />
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
                required
              />
            </div>
          </div>

          {/* Email (optional) */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-light">
              {t("contact.email")}
            </label>
            <Input
              id="email"
              type="email"
              placeholder={t("contact.email")}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Event Type + Date */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-light">{t("contact.eventType")} *</label>
              <Select
                onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                value={formData.eventType}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("contact.eventType.placeholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">{t("contact.eventType.wedding")}</SelectItem>
                  <SelectItem value="party">{t("contact.eventType.party")}</SelectItem>
                  <SelectItem value="baptism">{t("contact.eventType.baptism")}</SelectItem>
                  <SelectItem value="corporate">{t("contact.eventType.corporate")}</SelectItem>
                  <SelectItem value="other">{t("contact.eventType.other")}</SelectItem>
                </SelectContent>
              </Select>
            </div>


            <div className="space-y-2">
              <label htmlFor="eventDate" className="text-sm font-light">
                {t("contact.eventDate")} *
              </label>
              <Input
                id="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Location + People */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-light">
                {t("contact.location")} *
              </label>
              <Input
                id="location"
                type="text"
                placeholder={t("contact.location")}
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-light">
                {t("contact.peopleApprox")}
              </label>
              <Select
                onValueChange={(value) => setFormData({ ...formData, people: value })}
                value={formData.people}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("contact.selectPeople")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<100">{t("contact.people.under100")}</SelectItem>
                  <SelectItem value="100-200">{t("contact.people.100to200")}</SelectItem>
                  <SelectItem value="200-300">{t("contact.people.200to300")}</SelectItem>
                  <SelectItem value="300-400">{t("contact.people.300to400")}</SelectItem>
                  <SelectItem value=">400">{t("contact.people.over400")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Extras */}
          <div className="space-y-2">
            <label className="text-sm font-light">{t("contact.extras")}:</label>
            <div className="flex flex-wrap gap-6">
              {["Lights", "Fog", "Fireworks"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Checkbox
                    id={item}
                    checked={formData.extras.includes(item)}
                    onCheckedChange={() => handleCheckbox(item)}
                  />
                  <label htmlFor={item} className="text-sm font-light cursor-pointer">
                    {t(`contact.extra.${item.toLowerCase()}`)}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-light">
              {t("contact.message")}
            </label>
            <Textarea
              id="message"
              placeholder={t("contact.placeholder.message")}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[150px]"
            />
          </div>

          {/* Submit */}
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
