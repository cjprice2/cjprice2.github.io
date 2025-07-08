import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="glass-card space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="whitespace-nowrap">
              <span className="opacity-0 animate-fade-in-delay-1 text-primary">
                {" "}
                Colin
              </span>
              <span className="opacity-0 animate-fade-in-delay-2 text-primary">
                {" "}
                Price
              </span>
            </span>
          </h1>

          <p className="text-lg text-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
            A Computer Science and Data Science student at the University of Wisconsin–Madison interested in frontend design, graphics, and data-driven experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="nice-button">
              View My Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm font-bold text-foreground mb-2"> Scroll </span>
                  <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};