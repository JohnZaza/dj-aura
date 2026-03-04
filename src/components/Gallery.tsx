import { useLanguage } from "@/contexts/LanguageContext";
import gal1 from "@/assets/gal1.jpg";
import gal2 from "@/assets/gal2.jpg";
import gal3 from "@/assets/gal3.jpg";
import gal4 from "@/assets/gal4.jpg";
import gal5 from "@/assets/gal5.MOV";
import gal6 from "@/assets/gal6.MOV";

const Gallery = () => {
    const { t } = useLanguage();

    const media = [
        {
            src: gal1,
            type: "image",
            alt: "Event 1",
            title: "Wedding Celebration",
        },
        {
            src: gal5,
            type: "video",
            alt: "Event 2",
            title: "Private Party",
        },
        {
            src: gal2,
            type: "image",
            alt: "Event 3",
            title: "Baptism Event",
        },
        {
            src: gal6,
            type: "video",
            alt: "Event 4",
            title: "Corporate Event",
        },
        {
            src: gal3,
            type: "image",
            alt: "Event 5",
            title: "Club Night",
        },
        {
            src: gal4,
            type: "image",
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
                    {media.map((item, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                            {item.type === "video" ? (
                                <video
                                    src={item.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <h3 className="text-white text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {item.title}
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
