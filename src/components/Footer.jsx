import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-6 mt-24 bg-transparent backdrop-blur-lg border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="opacity-0 animate-fade-in">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Colin Price. All rights reserved. Built with React & Tailwind.
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in-delay-1">
            <a
              href="#hero"
              className="nice-button flex items-center justify-center group px-4 py-2"
            >
              <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};