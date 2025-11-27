import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Web Graphics Portfolio",
    description: "Interactive portfolio featuring 15 computer graphics scenes with Canvas API and Three.js. Includes custom GLSL shaders for advanced effects, multi-pass rendering for real-time reflections, and a complete 3D racing game with physics-based mechanics.",
    image: "/projects/project1.png",
    tags: ["Canvas API", "Three.js", "WebGL", "GLSL", "SVG"],
    demoUrl: "https://cjprice2.github.io/graphics-portfolio/",
    githubUrl: "https://github.com/cjprice2/graphics-portfolio",
  },
  {
    id: 2,
    title: "Celebrity Shortest Path Finder",
    description:
      "A full-stack web app that computes the shortest connections between celebrities using IMDb datasets and TMDb API for celebrity photos, \
      built with Java, Spring Boot, Next.js, PostgreSQL, Docker, and AWS, handling over 60M+ relationships with scalable deployment.",
    image: "/projects/project2.png",
    tags: ["Spring Boot", "Next.js", "PostgreSQL", "Docker", "AWS"],
    demoUrl: "https://dmzjprts9js4l.cloudfront.net/",
    githubUrl: "https://github.com/cjprice2/ActorShortestPathApp",
  },
  {
    id: 3,
    title: "BuckyBot",
    description: "AI-powered course companion for UW-Madison that won 2nd place at a Google AI Hackathon. Chrome Extension that analyzes DARS transcripts and delivers personalized course recommendations through natural language interaction. Features contextual recommendations, real-time grade difficulty scoring via MadGrades API, professor ratings from RateMyProfessor, and visual degree progress tracking. Built with Python/Flask backend, DeepSeek LLM, and deployed on AWS Lambda.",
    image: "/projects/project3.png",
    tags: ["Python", "DeepSeek LLM", "Chrome Extension", "AWS Lambda", "JavaScript"],
    demoUrl: "https://chromewebstore.google.com/detail/buckybot-smart-course-sea/bjiannnhcmnfhkndblagpkpmdcmglffl",
    githubUrl: null,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-foreground"> Projects </span>
        </h2>

        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
          A collection of projects showcasing my skills in web development, data visualization, 
          and interactive design. Built with modern technologies and creative problem-solving.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-card card-hover overflow-hidden cursor-pointer flex flex-col h-full"
              onClick={() => window.open(project.demoUrl || project.githubUrl, '_blank')}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col flex-grow p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-3"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="nice-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/cjprice2"
          >
            Visit My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};