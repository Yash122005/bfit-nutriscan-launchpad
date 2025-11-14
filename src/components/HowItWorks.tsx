import { Smartphone, ScanLine, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Open the App",
    description: "Launch BfIT NutriScan on your smartphone",
    number: "01",
  },
  {
    icon: ScanLine,
    title: "Scan Barcode/Meal",
    description: "Point your camera at any food product or meal",
    number: "02",
  },
  {
    icon: Sparkles,
    title: "Get Instant Insights",
    description: "Receive detailed nutritional information powered by AI",
    number: "03",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to better nutrition
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple -translate-y-1/2" />
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 group relative">
                      <div className="text-8xl font-bold text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                        {step.number}
                      </div>
                      
                      <div className="relative">
                        <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:glow-green transition-all">
                          <Icon className="h-10 w-10 text-primary-foreground" />
                        </div>
                        
                        <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
