import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { TargetAudience } from "@/components/TargetAudience";
import { BusinessModel } from "@/components/BusinessModel";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <TargetAudience />
      <BusinessModel />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
