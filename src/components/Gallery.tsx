import { useLanguage } from "@/contexts/LanguageContext";
import eventPlaceholder from "@/assets/event-placeholder.jpg";

const Gallery = () => {
    const { t } = useLanguage();

    const images = [
        {
            src: eventPlaceholder,
            alt: "Event 1",
            title: "Wedding Celebration",
        },
        {
            src: eventPlaceholder,
            alt: "Event 2",
            title: "Private Party",
        },
        {
            src: eventPlaceholder,
            alt: "Event 3",
            title: "Baptism Event",
        },
        {
            src: eventPlaceholder,
            alt: "Event 4",
            title: "Corporate Event",
        },
        {
            src: eventPlaceholder,
            alt: "Event 5",
            title: "Club Night",
        },
        {
            src: eventPlaceholder,
            alt: "Event 6",
            title: "Vip Event",
        },
    ];

    return (
        <section id="gallery" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light mb-4">
                        {t("gallery.title")}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
                        {t("gallery.subtitle")}
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full opacity-50" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <h3 className="text-white text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default Gallery;
