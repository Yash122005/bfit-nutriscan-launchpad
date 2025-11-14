import { Scan, Activity, Utensils, Lightbulb, Watch } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "AI Nutritional Scanner",
    description: "Instantly scan barcodes and get detailed nutritional breakdowns powered by advanced AI",
    gradient: "from-neon-green to-neon-blue",
  },
  {
    icon: Activity,
    title: "Calorie & Macro Tracker",
    description: "Track your daily calories, proteins, carbs, and fats with precision and ease",
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    icon: Utensils,
    title: "Diet Customization",
    description: "Personalized plans for Keto, Muscle Gain, Vegan, and more dietary preferences",
    gradient: "from-neon-purple to-neon-green",
  },
  {
    icon: Lightbulb,
    title: "Meal Suggestions",
    description: "AI-powered meal recommendations based on your goals and nutritional needs",
    gradient: "from-neon-green to-neon-blue",
  },
  {
    icon: Watch,
    title: "Fitness Tracker Integration",
    description: "Seamlessly sync with popular fitness trackers for a complete health overview",
    gradient: "from-neon-blue to-neon-purple",
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to take control of your nutrition journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 group animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient}`} />
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 text-background" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
