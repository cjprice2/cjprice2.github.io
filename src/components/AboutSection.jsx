
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-foreground"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card space-y-4">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Background</h3>
            <p className="text-foreground leading-relaxed">
              I've been programming and working with a wide range of technology since I was young, driven by a love for problem solving. What started as curiosity about how things function grew into a passion for developing solutions and creating meaningful experiences.
            </p>
            <p className="text-foreground leading-relaxed">
              I'm drawn to the intersection of visual computing and data science; where code becomes art and data tells stories. I care about creating things that matter and solving problems that actually impact people's lives.
            </p>
          </div>

          <div className="glass-card space-y-4">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Experience</h3>
            <p className="text-foreground leading-relaxed">
              At UW-Madison, I work as a Library IT Technician Advanced responsible for triaging support tickets and managing the full hardware lifecycle. I also mentor students in computer graphics, helping them debug complex code and implement advanced rendering techniques.
            </p>
            <p className="text-foreground leading-relaxed">
              This January, I'm excited to join Quartz Health Solutions as a Power BI Developer Intern on their Consulting Analytics team. I'll be building interactive dashboards and reports, transforming and analyzing data, automating processes, and developing solutions that help make healthcare data more accessible and actionable.
            </p>
          </div>

          <div className="glass-card space-y-4 md:col-span-2">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Technical Skills</h3>
            <div className="space-y-2 text-foreground leading-relaxed">
              <p>
                <strong>Languages:</strong> Python, Java, JavaScript, R, SQL, Kotlin
              </p>
              <p>
                <strong>Frameworks & Libraries:</strong> React, Next.js, Spring Boot, Pandas, NumPy, Scikit-learn
              </p>
              <p>
                <strong>Data & Analytics:</strong> PostgreSQL, MongoDB, Power BI, Matplotlib, R
              </p>
              <p>
                <strong>Graphics & Visualization:</strong> Canvas API, Three.js, GLSL, SVG
              </p>
              <p>
                <strong>Tools & Deployment:</strong> Docker, AWS, Google Cloud, Git, GitHub, VS Code, Vim, Shell
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};