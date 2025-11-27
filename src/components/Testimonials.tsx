import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "NutriScan changed how I track my meals. So easy and accurate!",
  },
  {
    name: "Michael Chen",
    text: "Finally, a nutrition app that actually works. Love the instant scan feature.",
  },
  {
    name: "Emma Williams",
    text: "Best health app I've ever used. Makes healthy eating effortless.",
  },
  {
    name: "David Martinez",
    text: "The AI recognition is spot-on. Saves me so much time every day.",
  },
  {
    name: "Lisa Anderson",
    text: "Game changer for my fitness journey. Highly recommend!",
  },
  {
    name: "James Taylor",
    text: "Simple, beautiful, and incredibly effective. 5 stars!",
  },
  {
    name: "Olivia Brown",
    text: "Tracking nutrition has never been this intuitive. Absolutely love it.",
  },
  {
    name: "Ryan Garcia",
    text: "The scan feature is incredibly fast and accurate. Worth every penny!",
  },
  {
    name: "Sophia Lee",
    text: "Finally hit my health goals thanks to NutriScan. Amazing app!",
  },
  {
    name: "Daniel Kim",
    text: "Clean interface, powerful features. This app is a must-have.",
  },
];

export const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
          Join thousands of happy users transforming their nutrition journey
        </p>
      </div>

      <div className="relative">
        <div
          className="flex gap-6"
          style={{
            animation: isPaused ? "none" : "scroll 40s linear infinite",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 text-base leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-semibold text-primary">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
