import { Button } from "@/components/ui/button";
import { Play, Smartphone } from "lucide-react";
import heroScan from "@/assets/hero-scan.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-hero opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-green/20 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              BfIT <span className="text-gradient">NutriScan</span>
            </h1>
            <p className="text-3xl md:text-4xl font-semibold mb-4 text-primary">
              Scan. Know. Eat Smart.
            </p>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              An AI-powered app that instantly provides accurate nutritional information by scanning any food product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg h-14 px-8 animate-glow-pulse bg-primary hover:bg-primary/90">
                <Smartphone className="mr-2 h-5 w-5" />
                Download App
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 glass-card hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden glow-green">
              <img 
                src={heroScan} 
                alt="AI Nutrition Scanner" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
