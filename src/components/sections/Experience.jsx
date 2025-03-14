import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaBriefcase, FaTimes } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

export const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      company: "Verizon",
      logo: "/path-to-your-verizon-logo.png", // Add logo image path
      role: "Senior Full Stack Developer",
      period: "March 2024 - Present",
      description:
        "Leading the development of scalable applications, integrating cloud technologies, and optimizing performance for enterprise solutions.",
      responsibilities: [
        "Developing and maintaining enterprise-grade applications",
        "Enhancing cloud-based solutions using AWS services",
        "Optimizing system performance and ensuring scalability",
        "Implementing secure and efficient API architectures",
      ],
    },
    {
      company: "LTIMindtree",
      logo: "/portfolio_mukunda/LTIMindtree_logo.jpg", // Add logo image path
      role: "Full Stack Developer",
      period: "June 2021 - Jan 2023",
      description:
        "Developed and deployed the Airline Vacations App with Loyalty Points using Java, Spring Boot, and Angular, improving airline loyalty operations by 40%. Built real-time dashboards, optimized APIs, and implemented secure authentication with OAuth2 and JWT.",
      responsibilities: [
        "Built and maintained microservices-based applications",
        "Enhanced security measures for APIs and web applications",
        "Improved front-end performance and user experience",
        "Worked in an Agile environment with cross-functional teams",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 shadow-xl transform transition-all hover:-translate-y-2 border border-gray-800 bg-gray-900 relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedExperience(exp)}
              >
                {/* Company Logo */}
                <div className="absolute top-2 left-2 w-12 h-12 rounded-full overflow-hidden bg-gray-800">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">{exp.role}</h3>
                <h4 className="text-xl text-gray-300">{exp.company}</h4>
                <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Dialog Modal */}
      {selectedExperience && (
        <Dialog open={!!selectedExperience} onClose={() => setSelectedExperience(null)} className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl max-w-lg w-full relative border border-gray-800 text-white">
            <button
              className="absolute top-3 right-3 text-white hover:text-red-500 transition"
              onClick={() => setSelectedExperience(null)}
            >
              <FaTimes className="text-2xl" />
            </button>
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">{selectedExperience.role}</h3>
            <h4 className="text-xl text-gray-300">{selectedExperience.company}</h4>
            <p className="text-sm text-gray-400 mb-4">{selectedExperience.period}</p>
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              {selectedExperience.responsibilities.map((resp, index) => (
                <li key={index} className="bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 transition shadow-md">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </Dialog>
      )}
    </section>
  );
};
