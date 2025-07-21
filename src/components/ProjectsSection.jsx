import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Web Graphics Portfolio",
    description: "A portfolio of my web graphics projects from my computer graphics class.",
    image: "/projects/project1.png",
    tags: ["Canvas API", "Three.js", "WebGL", "SVG"],
    demoUrl: "https://cjprice2.github.io/graphics-portfolio/",
    githubUrl: "https://github.com/cjprice2/graphics-portfolio",
  },
  {
    id: 2,
    title: "Actor Shortest Path Application",
    description:
      "A visualizer for the shortest path between two actors based on movies they have appeared in together.",
    image: "/projects/project2.png",
    tags: ["Java", "JavaFX"],
    demoUrl: "#",
    githubUrl: "https://github.com/cjprice2/ActorShortestPathApp",
  },
  {
    id: 3,
    title: "Personal Website (This one!)",
    description:
      "My personal website built with React + Vite and Tailwind CSS. Created the background animation with Canvas API.",
    image: "/projects/project3.png",
    tags: ["React", "Vite", "Tailwind CSS", "Canvas API"],
    demoUrl: "#",
    githubUrl: "https://github.com/cjprice2/cjprice2.github.io",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
          A collection of projects showcasing my skills in web development, data visualization, 
          and interactive design. Built with modern technologies and creative problem-solving.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-card card-hover overflow-hidden cursor-pointer"
              onClick={() => window.open(project.id === 1 ? project.demoUrl : project.githubUrl, '_blank')}
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="">
                <div className="flex flex-wrap gap-2 mb-4 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.id !== 2 && project.id !== 3 && project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
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