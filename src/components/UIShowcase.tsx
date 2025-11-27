import uiMockup1 from "@/assets/ui-mockup-1.jpg";
import uiMockup2 from "@/assets/ui-mockup-2.jpg";
import uiMockup3 from "@/assets/ui-mockup-3.jpg";
import uiMockup4 from "@/assets/ui-mockup-4.jpg";
import uiMockup5 from "@/assets/ui-mockup-5.jpg";

const mockups = [
  { src: uiMockup1, alt: "Fitness tracking dashboard" },
  { src: uiMockup2, alt: "Nutrition dashboard" },
  { src: uiMockup3, alt: "Food scanning interface" },
  { src: uiMockup4, alt: "Health statistics dashboard" },
  { src: uiMockup5, alt: "Meal planning interface" },
];

export const UIShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experience the Interface
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          A glimpse into our beautifully crafted app design
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mockups.map((mockup, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <img
                src={mockup.src}
                alt={mockup.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
