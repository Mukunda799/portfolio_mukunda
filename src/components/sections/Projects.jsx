import { RevealOnScroll } from "../RevealOnScroll";
import { FaProjectDiagram } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Cloud Platform",
      description:
        "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
      technologies: ["React", "Node.js", "AWS", "Docker"],
      link: "#",
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "ML-powered data visualization platform with predictive analytics and interactive reports.",
      technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
      link: "#",
    },
    {
      title: "E-Commerce Web App",
      description:
        "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Real-Time Chat App",
      description:
        "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
      technologies: ["Socket.IO", "Express", "React", "Redis"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 shadow-xl transform transition-all hover:-translate-y-2 border border-gray-800 bg-gray-900 relative overflow-hidden"
              >
                <div className="absolute top-2 left-2">
                  <FaProjectDiagram className="text-blue-400 text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 transition shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
