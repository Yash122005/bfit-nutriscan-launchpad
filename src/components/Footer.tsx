import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold mb-2">
              BfIT <span className="text-gradient">NutriScan</span>
            </p>
            <p className="text-muted-foreground">Scan. Know. Eat Smart.</p>
          </div>
          
          <div className="text-center md:text-right space-y-3">
            <div className="flex justify-center md:justify-end">
              <a
                href="https://www.instagram.com/bfits_tayfit?igsh=MXYyNTNjc3IwZ3ZtMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-muted-foreground">
              © 2024 Team OLA. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              BIT Mesra, Jharkhand
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
