import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Globe, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-fade-in-up space-y-8">
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:scale-105 transition-transform">
              <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-muted-foreground">customercare@bfit.com</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:scale-105 transition-transform">
              <div className="bg-secondary w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                <Globe className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Website</h3>
                <p className="text-muted-foreground">www.bfit.com</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:scale-105 transition-transform">
              <div className="bg-accent w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Address</h3>
                <p className="text-muted-foreground">BIT Mesra, Jharkhand</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-border/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/50 border-border/50 resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
