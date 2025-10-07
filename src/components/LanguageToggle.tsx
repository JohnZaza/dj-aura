import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      <Button
        variant={language === "el" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("el")}
        className="font-normal"
      >
        ΕΛ
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="font-normal"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageToggle;
