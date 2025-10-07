import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoDark from "@/assets/logo-dark.png";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Logo & Tagline */}
          <div>
            <img src={logoDark} alt="DJ John Ziaziaris" className="h-14 mb-4" />
            <p className="text-muted-foreground font-light text-sm">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-normal text-base mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-normal text-base mb-4">{t("footer.getInTouch")}</h3>
            <div className="space-y-3 mb-6">
              <a href="mailto:contact@djziaziaris.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-light">contact@djziaziaris.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-light">+1 (234) 567-890</span>
              </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground font-light">
          <p>&copy; {new Date().getFullYear()} DJ John Ziaziaris. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
