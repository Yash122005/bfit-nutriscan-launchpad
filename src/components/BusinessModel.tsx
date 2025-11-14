import { Gift, Crown, Handshake } from "lucide-react";

const models = [
  {
    icon: Gift,
    title: "Free Basic Features",
    description: "Essential scanning and tracking features available to everyone at no cost",
    color: "from-neon-green to-neon-green-bright",
  },
  {
    icon: Crown,
    title: "Premium Subscription",
    description: "Advanced analytics, meal planning, and personalized coaching for serious users",
    color: "from-neon-blue to-neon-blue-bright",
  },
  {
    icon: Handshake,
    title: "Affiliate Partnerships",
    description: "Collaborations with fitness and supplement brands for mutual growth",
    color: "from-neon-purple to-neon-purple-bright",
  },
];

export const BusinessModel = () => {
  return (
    <section className="py-24 relative" id="business-model">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">Business Model</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sustainable growth through multiple revenue streams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 group animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className={`bg-gradient-to-r ${model.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 text-background" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">{model.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{model.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
