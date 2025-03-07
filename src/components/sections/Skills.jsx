import { RevealOnScroll } from "../RevealOnScroll";
import { FaCode, FaServer, FaDatabase, FaTools, FaCloud } from "react-icons/fa";

export const Skills = () => {
  const skillCategories = [
    { title: "Frontend", icon: <FaCode className="text-blue-400 text-3xl" />, skills: [ "HTML5", "CSS", "JavaScript", "TypeScript","React", "TypeScript", "TailwindCSS"] },
    { title: "Backend", icon: <FaServer className="text-green-400 text-3xl" />, skills: ["Node.js", "Python", "AWS", "GraphQL", "Django"] },
    { title: "Databases", icon: <FaDatabase className="text-yellow-400 text-3xl" />, skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"] },
    { title: "Cloud Technologies", icon: <FaCloud className="text-cyan-400 text-3xl" />, skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"] },
    { title: "Tools", icon: <FaTools className="text-purple-400 text-3xl" />, skills: ["Git", "Jenkins", "Terraform", "Ansible", "CI/CD Pipelines"] },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 shadow-xl transform transition-all hover:-translate-y-2 border border-gray-800 bg-gray-900 relative overflow-hidden"
              >
                <div className="absolute top-2 left-2">{category.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 transition shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
