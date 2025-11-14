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
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © 2024 Team OLA. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              BIT Mesra, Jharkhand
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
