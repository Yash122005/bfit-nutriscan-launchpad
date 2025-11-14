import { AlertCircle, Clock, Target, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Lack of Accurate Information",
    description: "Unreliable nutritional data on food labels",
  },
  {
    icon: Clock,
    title: "Tracking Difficulties",
    description: "Time-consuming manual calorie logging",
  },
  {
    icon: Target,
    title: "Busy Lifestyle",
    description: "Gym-goers struggle to maintain diet consistency",
  },
  {
    icon: TrendingUp,
    title: "Hard to Follow Goals",
    description: "Difficulty staying aligned with fitness objectives",
  },
];

export const Problem = () => {
  return (
    <section className="py-24 relative" id="problem">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">Why NutriScan?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solving the biggest challenges in nutrition tracking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
