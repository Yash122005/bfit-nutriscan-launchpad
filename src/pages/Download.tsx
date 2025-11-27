import { Button } from "@/components/ui/button";
import { Smartphone, Apple, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Download() {
  const handleDownload = () => {
    // This would trigger the actual app download
    console.log("Download initiated");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Smartphone className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-5xl font-bold">
              Download <span className="text-gradient">BFIT NutriScan</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              Get instant nutritional insights at your fingertips. Scan, analyze, and make smarter food choices on the go.
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <Button
              size="lg"
              onClick={handleDownload}
              className="w-full sm:w-auto text-lg h-16 px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Smartphone className="mr-3 h-6 w-6" />
              App Launch Soon...
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownload}
                className="w-full sm:w-auto glass-card hover:bg-white/10"
              >
                <Apple className="mr-2 h-5 w-5" />
                iOS App Store
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownload}
                className="w-full sm:w-auto glass-card hover:bg-white/10"
              >
                <Play className="mr-2 h-5 w-5" />
                Google Play
              </Button>
            </div>
          </div>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="glass-card p-6 rounded-lg space-y-2">
              <div className="text-primary font-bold text-lg">Fast Scanning</div>
              <p className="text-sm text-muted-foreground">
                Get nutritional info in seconds
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg space-y-2">
              <div className="text-primary font-bold text-lg">Smart Analysis</div>
              <p className="text-sm text-muted-foreground">
                AI-powered nutrition insights
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg space-y-2">
              <div className="text-primary font-bold text-lg">Track Progress</div>
              <p className="text-sm text-muted-foreground">
                Monitor your health journey
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
