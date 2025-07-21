import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Next.js", level: 65, category: "frontend" },
  { name: "Three.js", level: 85, category: "frontend" },
  { name: "Canvas API", level: 90, category: "frontend" },

  // Backend
  { name: "Flask", level: 75, category: "backend" },
  { name: "REST APIs", level: 80, category: "backend" },
  { name: "Python", level: 90, category: "backend" },
  { name: "Java", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },

  // Data Science
  { name: "Pandas", level: 85, category: "data" },
  { name: "Scikit-learn", level: 75, category: "data" },
  { name: "Matplotlib", level: 85, category: "data" },
  { name: "R", level: 90, category: "data" },
  { name: "Jupyter", level: 85, category: "data" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "Figma", level: 95, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" }
];

const categories = ["all", "frontend", "backend", "data", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="glass-card card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-primary/30 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};