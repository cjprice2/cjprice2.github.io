import { BarChart3, Brain, Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="glass-card space-y-6 h-full flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-foreground">
              Passionate Student & Developer
            </h3>

            <p className="text-foreground leading-relaxed">
              I'm a student at the University of Wisconsin-Madison, where I'm
              pursuing degrees in Computer Science and Data Science. My academic 
              journey has exposed me to diverse areas of technology, from algorithms 
              and data structures to statistical modeling and machine learning. I'm 
              particularly drawn to the intersection of visual computing and data science.
            </p>

            <p className="text-foreground leading-relaxed">
              I'm passionate about creating elegant solutions to complex problems and 
              building meaningful projects that push creative boundaries. Through coursework 
              and personal projects, I'm constantly expanding my knowledge in web development, 
              data analysis, and software engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="nice-button">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 h-full">
            <div className="glass-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-foreground">
                    Building modern applications with React frontend and Python/Java backends.
                    Experienced in working across both frontend frameworks and server-side architectures.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Science & ML</h4>
                  <p className="text-foreground">
                    Analyzing complex datasets with Pandas, building ML models
                    with Scikit-learn, and creating visualizations with Matplotlib and R.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-foreground">
                    Applying computer science fundamentals and analytical thinking
                    to tackle complex technical challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};