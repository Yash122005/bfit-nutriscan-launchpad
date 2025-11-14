import { Dumbbell, Heart, Salad, Activity } from "lucide-react";

const audiences = [
  {
    icon: Dumbbell,
    title: "Gym-goers",
    description: "Track macros and optimize muscle building",
  },
  {
    icon: Heart,
    title: "Fitness Enthusiasts",
    description: "Maintain peak performance and health",
  },
  {
    icon: Salad,
    title: "Special Diets",
    description: "For diabetes, gluten-free, and more",
  },
  {
    icon: Activity,
    title: "Yoga Practitioners",
    description: "Balance nutrition with mindful eating",
  },
];

export const TargetAudience = () => {
  return (
    <section className="py-24" id="target-audience">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">Who It's For</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed for anyone committed to better nutrition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex bg-gradient-to-r from-neon-green to-neon-blue w-20 h-20 rounded-full items-center justify-center mb-6 group-hover:glow-blue transition-all">
                  <Icon className="h-10 w-10 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{audience.title}</h3>
                <p className="text-muted-foreground">{audience.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
