// import { createContext, useContext, useState, ReactNode } from "react";

// type Language = "el" | "en";

// interface LanguageContextType {
//   language: Language;
//   setLanguage: (lang: Language) => void;
//   t: (key: string) => string;
// }

// const translations = {
//   el: {
//     // Hero
//     "hero.tagline": "Ανεβάστε την",
//     "hero.experience": "Εμπειρία σας",
//     "hero.description": "Επαγγελματικές υπηρεσίες DJ για γάμους, ιδιωτικά πάρτι, βαπτίσεις και κάθε εορτασμό που αξίζει την τέλεια μουσική",
//     "hero.bookEvent": "Κλείστε την Εκδήλωσή σας",
//     "hero.learnMore": "Μάθετε Περισσότερα",
//     "hero.unmuteMusic": "Ενεργοποίηση Μουσικής",
//     "hero.muteMusic": "Απενεργοποίηση Μουσικής",

//     // About
//     "about.title": "Σχετικά με",
//     "about.me": "Εμένα",
//     "about.bio1": "Με χρόνια εμπειρίας στη δημιουργία αξέχαστων στιγμών, ειδικεύομαι στο να καταλαβαίνω την ατμόσφαιρα και να προσφέρω το τέλειο soundtrack για τις ξεχωριστές σας περιπτώσεις.",
//     "about.bio2": "Από οικείες βαπτίσεις μέχρι μεγαλοπρεπείς γάμους και αποκλειστικά ιδιωτικά πάρτι, φέρνω επαγγελματικό εξοπλισμό, φωτισμό και ειδικά εφέ για να μεταμορφώσω την εκδήλωσή σας σε μια εξαιρετική εμπειρία.",
//     "about.bio3": "Το πάθος μου είναι να δημιουργώ την τέλεια ατμόσφαιρα μέσω της μουσικής, διασφαλίζοντας ότι κάθε στιγμή αντηχεί στους καλεσμένους σας και δημιουργεί αναμνήσεις που διαρκούν μια ζωή.",
//     "about.events": "Εκδηλώσεις",
//     "about.satisfaction": "Ικανοποίηση",

//     // Services
//     "services.title": "Υπηρεσίες",
//     "services.events": "Εκδηλώσεων",
//     "services.description": "Επαγγελματικές υπηρεσίες DJ προσαρμοσμένες για να κάνουν τον εορτασμό σας εξαιρετικό",
//     "services.weddings": "Γάμοι",
//     "services.baptisms": "Βαπτίσεις",
//     "services.parties": "Ιδιωτικά Πάρτι",

//     // Contact
//     "contact.title": "Ας Κάνουμε την Εκδήλωσή σας",
//     "contact.unforgettable": "Αξέχαστη",
//     "contact.description": "Επικοινωνήστε για να συζητήσουμε την εκδήλωσή σας και ας δημιουργήσουμε μαζί την τέλεια μουσική εμπειρία",
//     "contact.name": "Όνομα",
//     "contact.email": "Email (προαιρετικό)",
//     "contact.phone": "Κινητό Τηλέφωνο",
//     "contact.eventType": "Τύπος Εκδήλωσης",
//     "contact.eventType.placeholder": "Επιλέξτε τύπο εκδήλωσης",
//     "contact.eventType.wedding": "Γάμος",
//     "contact.eventType.party": "Πάρτι",
//     "contact.eventType.baptism": "Βάπτιση",
//     "contact.eventType.corporate": "Εταιρική Εκδήλωση",
//     "contact.eventType.other": "Άλλο",
//     "contact.eventDate": "Ημερομηνία Εκδήλωσης",
//     "contact.location": "Τοποθεσία Εκδήλωσης",
//     "contact.peopleApprox": "Αριθμός Καλεσμένων (περίπου)",
//     "contact.selectPeople": "Επιλέξτε περίπου αριθμό",
//     "contact.people.under100": "Κάτω από 100",
//     "contact.people.100to200": "100–200",
//     "contact.people.200to300": "200–300",
//     "contact.people.300to400": "300–400",
//     "contact.people.over400": "Πάνω από 400",
//     "contact.extras": "Πρόσθετα Εφέ",
//     "contact.extra.lights": "Φωτισμός",
//     "contact.extra.fog": "Καπνός",
//     "contact.extra.fireworks": "Πυροτεχνήματα",
//     "contact.message": "Περισσότερες Πληροφορίες",
//     "contact.placeholder.message": "Πείτε μου για την εκδήλωσή σας, τις λεπτομέρειες ή ειδικές απαιτήσεις...",
//     "contact.send": "Αποστολή Μηνύματος",
//     "contact.sending": "Αποστολή...",
//     "contact.success.title": "Το μήνυμα στάλθηκε!",
//     "contact.success.description": "Ευχαριστώ που επικοινωνήσατε. Θα επικοινωνήσω σύντομα!",
//     "contact.error.title": "Μη έγκυρη φόρμα",

//     // Footer
//     "footer.tagline": "Δημιουργώντας αξέχαστες στιγμές μέσω της μουσικής",
//     "footer.quickLinks": "Γρήγοροι Σύνδεσμοι",
//     "footer.about": "Σχετικά",
//     "footer.services": "Υπηρεσίες",
//     "footer.contact": "Επικοινωνία",
//     "footer.getInTouch": "Επικοινωνήστε",
//     "footer.rights": "Όλα τα δικαιώματα διατηρούνται.",
//   },

//   en: {
//     // Hero
//     "hero.tagline": "Elevate Your",
//     "hero.experience": "Experience",
//     "hero.description": "Professional DJ services for weddings, private parties, baptisms, and every celebration that deserves the perfect soundtrack",
//     "hero.bookEvent": "Book Your Event",
//     "hero.learnMore": "Learn More",
//     "hero.unmuteMusic": "Unmute Background Music",
//     "hero.muteMusic": "Mute Background Music",

//     // About
//     "about.title": "About",
//     "about.me": "Me",
//     "about.events": "Events",
//     "about.satisfaction": "Satisfaction",

//     // Contact
//     "contact.title": "Let's Make Your Event",
//     "contact.unforgettable": "Unforgettable",
//     "contact.description": "Get in touch to discuss your event and let's create the perfect musical experience together",
//     "contact.name": "Name",
//     "contact.email": "Email (optional)",
//     "contact.phone": "Mobile Phone",
//     "contact.eventType": "Event Type",
//     "contact.eventType.placeholder": "Select event type",
//     "contact.eventType.wedding": "Wedding",
//     "contact.eventType.party": "Party",
//     "contact.eventType.baptism": "Baptism",
//     "contact.eventType.corporate": "Corporate Event",
//     "contact.eventType.other": "Other",
//     "contact.eventDate": "Event Date",
//     "contact.location": "Event Location",
//     "contact.peopleApprox": "Approximate Number of Guests",
//     "contact.selectPeople": "Select approximate number",
//     "contact.people.under100": "Under 100",
//     "contact.people.100to200": "100–200",
//     "contact.people.200to300": "200–300",
//     "contact.people.300to400": "300–400",
//     "contact.people.over400": "Over 400",
//     "contact.extras": "Additional Effects",
//     "contact.extra.lights": "Lights",
//     "contact.extra.fog": "Fog",
//     "contact.extra.fireworks": "Fireworks",
//     "contact.message": "More Information",
//     "contact.placeholder.message": "Tell me about your event details or any special requirements...",
//     "contact.send": "Send Message",
//     "contact.sending": "Sending...",
//     "contact.success.title": "Message sent!",
//     "contact.success.description": "Thanks for reaching out. I'll get back to you soon!",
//     "contact.error.title": "Invalid form",

//     // Footer
//     "footer.tagline": "Creating unforgettable moments through music",
//     "footer.quickLinks": "Quick Links",
//     "footer.about": "About",
//     "footer.services": "Services",
//     "footer.contact": "Contact",
//     "footer.getInTouch": "Get in Touch",
//     "footer.rights": "All rights reserved.",
//   },
// };

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export const LanguageProvider = ({ children }: { children: ReactNode }) => {
//   const [language, setLanguage] = useState<Language>("el");

//   const t = (key: string): string => {
//     return translations[language][key as keyof typeof translations.el] || key;
//   };

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// };

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "el" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  el: {
    // Hero
    "hero.tagline": "Κάντε κάθε εκδήλωσή σας",
    "hero.experience": "Μοναδική",
    "hero.description": "Επαγγελματικές υπηρεσίες DJ για γάμους, ιδιωτικά πάρτι, βαπτίσεις και κάθε εορτασμό που αξίζει την τέλεια μουσική",
    "hero.bookEvent": "Κλείστε την Εκδήλωσή σας",
    "hero.learnMore": "Μάθετε Περισσότερα",
    "hero.unmuteMusic": "Ενεργοποίηση Μουσικής",
    "hero.muteMusic": "Απενεργοποίηση Μουσικής",

    // About
    "about.title": "Σχετικά με",
    "about.me": "Εμένα",
    "about.bio1": "Με χρόνια εμπειρίας στη δημιουργία αξέχαστων στιγμών, ειδικεύομαι στο να καταλαβαίνω την ατμόσφαιρα και να προσφέρω το τέλειο soundtrack για τις ξεχωριστές σας περιπτώσεις.",
    "about.bio2": "Από οικείες βαπτίσεις μέχρι μεγαλοπρεπείς γάμους και αποκλειστικά ιδιωτικά πάρτι, φέρνω επαγγελματικό εξοπλισμό, φωτισμό και ειδικά εφέ για να μεταμορφώσω την εκδήλωσή σας σε μια εξαιρετική εμπειρία.",
    "about.bio3": "Το πάθος μου είναι να δημιουργώ την τέλεια ατμόσφαιρα μέσω της μουσικής, διασφαλίζοντας ότι κάθε στιγμή αντηχεί στους καλεσμένους σας και δημιουργεί αναμνήσεις που διαρκούν μια ζωή.",
    "about.events": "Εκδηλώσεις",
    "about.satisfaction": "Ικανοποίηση",

    // Services
    "services.title": "Υπηρεσίες",
    "services.events": "Εκδηλώσεων",
    "services.description": "Επαγγελματικές υπηρεσίες DJ προσαρμοσμένες για να κάνουν τον εορτασμό σας εξαιρετικό",
    "services.weddings": "Γάμοι",
    "services.weddings.desc": "Δημιουργήστε την τέλεια ρομαντική ατμόσφαιρα για τη σημαντική σας ημέρα με προσεκτικά επιλεγμένες playlists και ομαλές μεταβάσεις.",
    "services.baptisms": "Βαπτίσεις",
    "services.baptisms.desc": "Γιορτάστε νέες αρχές με κομψές μουσικές επιλογές που τιμούν την παράδοση και διασκεδάζουν τους καλεσμένους.",
    "services.parties": "Ιδιωτικά Πάρτι",
    "services.parties.desc": "Μετατρέψτε κάθε γιορτή σε αξέχαστη εμπειρία με δυναμικά sets και επαγγελματικό φωτισμό.",
    "services.equipment": "Επαγγελματικός Εξοπλισμός",
    "services.equipment.desc": "Ηχοσυστήματα υψηλής ποιότητας και mixers τελευταίας τεχνολογίας.",
    "services.lighting": "Φωτισμός & Εφέ",
    "services.lighting.desc": "Δυναμικά φώτα, καπνομηχανές και μοναδικά εφέ για εντυπωσιακή ατμόσφαιρα.",
    "services.playlists": "Προσαρμοσμένες Playlists",
    "services.playlists.desc": "Διαμορφωμένες σύμφωνα με το ύφος και τη διάθεση της εκδήλωσής σας.",

    // Contact
    "contact.title": "Ας Κάνουμε την Εκδήλωσή σας",
    "contact.unforgettable": "Αξέχαστη",
    "contact.description": "Επικοινωνήστε για να συζητήσουμε την εκδήλωσή σας και ας δημιουργήσουμε μαζί την τέλεια μουσική εμπειρία",
    "contact.name": "Όνομα",
    "contact.email": "Email (προαιρετικό)",
    "contact.phone": "Κινητό Τηλέφωνο",
    "contact.eventType": "Τύπος Εκδήλωσης",
    "contact.eventType.placeholder": "Επιλέξτε τύπο εκδήλωσης",
    "contact.eventType.wedding": "Γάμος",
    "contact.eventType.party": "Πάρτι",
    "contact.eventType.baptism": "Βάπτιση",
    "contact.eventType.corporate": "Εταιρική Εκδήλωση",
    "contact.eventType.other": "Άλλο",
    "contact.eventDate": "Ημερομηνία Εκδήλωσης",
    "contact.location": "Τοποθεσία Εκδήλωσης",
    "contact.peopleApprox": "Αριθμός Καλεσμένων (περίπου)",
    "contact.selectPeople": "Επιλέξτε περίπου αριθμό",
    "contact.people.under100": "Κάτω από 100",
    "contact.people.100to200": "100–200",
    "contact.people.200to300": "200–300",
    "contact.people.300to400": "300–400",
    "contact.people.over400": "Πάνω από 400",
    "contact.extras": "Πρόσθετα Εφέ",
    "contact.extra.lights": "Φωτισμός",
    "contact.extra.fog": "Καπνός",
    "contact.extra.fireworks": "Πυροτεχνήματα",
    "contact.message": "Περισσότερες Πληροφορίες",
    "contact.placeholder.message": "Πείτε μου για την εκδήλωσή σας, τις λεπτομέρειες ή ειδικές απαιτήσεις...",
    "contact.send": "Αποστολή Μηνύματος",
    "contact.sending": "Αποστολή...",
    "contact.success.title": "Το μήνυμα στάλθηκε!",
    "contact.success.description": "Ευχαριστώ που επικοινωνήσατε. Θα επικοινωνήσω σύντομα!",
    "contact.error.title": "Μη έγκυρη φόρμα",
    "contact.gdpr.error": "Πρέπει να αποδεχτείτε τους όρους GDPR",
    "gallery.title": "Γκαλερί",
    "gallery.subtitle": "Στιγμές από τις εκδηλώσεις μας",

    // Footer
    "footer.tagline": "Δημιουργώντας αξέχαστες στιγμές μέσω της μουσικής",
    "footer.quickLinks": "Γρήγοροι Σύνδεσμοι",
    "footer.about": "Σχετικά",
    "footer.services": "Υπηρεσίες",
    "footer.contact": "Επικοινωνία",
    "footer.getInTouch": "Επικοινωνήστε",
    "footer.rights": "Όλα τα δικαιώματα διατηρούνται.",
  },

  en: {
    // Hero
    "hero.tagline": "Make Every Kind of Event",
    "hero.experience": "Unique",
    "hero.description": "Professional DJ services for weddings, private parties, baptisms, and every celebration that deserves the perfect soundtrack",
    "hero.bookEvent": "Book Your Event",
    "hero.learnMore": "Learn More",
    "hero.unmuteMusic": "Unmute Background Music",
    "hero.muteMusic": "Mute Background Music",

    // About
    "about.title": "About",
    "about.me": "Me",
    "about.events": "Events",
    "about.satisfaction": "Satisfaction",

    // Services
    "services.title": "Event",
    "services.events": "Services",
    "services.description": "Professional DJ services tailored to make your celebration extraordinary",
    "services.weddings": "Weddings",
    "services.weddings.desc": "Create the perfect romantic atmosphere for your special day with curated playlists and seamless transitions.",
    "services.baptisms": "Baptisms",
    "services.baptisms.desc": "Celebrate new beginnings with elegant music selections that honor tradition while entertaining your guests.",
    "services.parties": "Private Parties",
    "services.parties.desc": "Transform any celebration into an unforgettable experience with high-energy sets and professional lighting.",
    "services.equipment": "Professional Equipment",
    "services.equipment.desc": "High-quality sound systems and state-of-the-art mixers.",
    "services.lighting": "Lighting & Effects",
    "services.lighting.desc": "Dynamic lights, fog machines, and unique visual effects.",
    "services.playlists": "Custom Playlists",
    "services.playlists.desc": "Tailored to match your event’s style and atmosphere.",

    // Contact
    "contact.title": "Let's Make Your Event",
    "contact.unforgettable": "Unforgettable",
    "contact.description": "Get in touch to discuss your event and let's create the perfect musical experience together",
    "contact.name": "Name",
    "contact.email": "Email (optional)",
    "contact.phone": "Mobile Phone",
    "contact.eventType": "Event Type",
    "contact.eventType.placeholder": "Select event type",
    "contact.eventType.wedding": "Wedding",
    "contact.eventType.party": "Party",
    "contact.eventType.baptism": "Baptism",
    "contact.eventType.corporate": "Corporate Event",
    "contact.eventType.other": "Other",
    "contact.eventDate": "Event Date",
    "contact.location": "Event Location",
    "contact.peopleApprox": "Approximate Number of Guests",
    "contact.selectPeople": "Select approximate number",
    "contact.people.under100": "Under 100",
    "contact.people.100to200": "100–200",
    "contact.people.200to300": "200–300",
    "contact.people.300to400": "300–400",
    "contact.people.over400": "Over 400",
    "contact.extras": "Additional Effects",
    "contact.extra.lights": "Lights",
    "contact.extra.fog": "Fog",
    "contact.extra.fireworks": "Fireworks",
    "contact.message": "More Information",
    "contact.placeholder.message": "Tell me about your event details or any special requirements...",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success.title": "Message sent!",
    "contact.success.description": "Thanks for reaching out. I'll get back to you soon!",
    "contact.error.title": "Invalid form",
    "contact.gdpr.error": "You must accept the GDPR terms",
    "gallery.title": "Gallery",
    "gallery.subtitle": "Moments from our events",

    // Footer
    "footer.tagline": "Creating unforgettable moments through music",
    "footer.quickLinks": "Quick Links",
    "footer.about": "About",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.getInTouch": "Get in Touch",
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("el");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.el] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
