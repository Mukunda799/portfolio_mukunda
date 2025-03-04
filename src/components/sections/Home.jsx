import { useState } from "react";
import { FaUniversity, FaGraduationCap, FaCalendarAlt, FaStar } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll"; 
import ConnectWithMe from "./ConnectWithMe";
import { FaDownload } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Profile Picture Above Name */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="/portfolio_mukunda/DSC_0463.JPG" // Update your profile pic path herepedrotech-portfolio\public\DSC_0463.JPG
              alt="Mukunda Krishna Ramisetti"
              className="w-65 h-65 object-cover rounded-full mb-6" // Change to object-contain to avoid cropping
            />
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I’m Mukunda Krishna Ramisetti
            </h1>
          </div>

          <section className="bg-white-100 text-white-800 py-12">
    <div className="max-w-3xl mx-auto px-6">
        <p className="text-lg mb-6">
            I am a passionate <strong>Full Stack Java Developer</strong> with over two years of experience, alongside a 
            master's degree in Artificial Intelligence and a bachelor's in Computer Science.
        </p>

        <p className="text-lg mb-6">
            My journey in software development began at <strong>LTIMindtree</strong>, where I contributed to the development 
            of an <strong>Airline Vacations App</strong> with loyalty points integration, improving efficiency by 40%. 
            I worked extensively with <strong>Java, Spring Boot, REST APIs, and Angular</strong> to deliver scalable and high-performance solutions.
        </p>

        <p className="text-lg mb-6">
            After my time at LTIMindtree, I moved to the United States to pursue a <strong>Master’s in Artificial Intelligence</strong> 
            at the <strong>University of North Texas</strong>. During my program, I have learned the GEN AI, Data Engineering solutions and various Data Visualization tools.
        </p>

        <p className="text-lg mb-6">
            At <strong>Tek Leaders</strong>, I worked on building enterprise-grade features like <strong>Cycle Counting and 
            Transport Management Systems</strong> using <strong>Java, React, and Kafka</strong>, reducing operational costs by 30%.
        </p>

        <p className="text-lg mb-6">
            My expertise spans from developing robust <strong>microservices architectures</strong> to implementing secure 
            <strong>OAuth2 and JWT authentication</strong>. I also have hands-on experience setting up <strong>CI/CD pipelines, 
            cloud infrastructure, and DevOps automation</strong>.
        </p>

        <p className="text-lg mb-6">
            Having worked in both <strong>startup environments and large enterprises</strong>, I have developed the ability 
            to adapt and thrive in diverse team settings.
        </p>

        <p className="text-lg font-semibold">
            I am now seeking a full-time position as a <strong>Software Engineer</strong>, where I can leverage my skills 
            to drive innovation and excellence in the tech industry.
        </p>

        <p className="text-lg mt-6">
            <strong>Let’s connect</strong> and explore how we can collaborate to build impactful solutions!
        </p>
    </div>
</section>


          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            >
              View Projects
            </a>
            <a
              href="/portfolio_mukunda/Mukunda_R_Resume.pdf"  // Ensure resume.pdf is placed in public/
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Download Resume</span>
              <FaDownload className="ml-2" />
            </a>
          </div>

          {/* Connect With Me Section */}
          <ConnectWithMe />

          {/* 🎓 Education Section */}
          <Education />
        </div>
      </RevealOnScroll>
    </section>
  );
};



export const Education = () => {
  return (
    <section id="education" className="py-20 bg-black text-center flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-12 text-white">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
        <EducationCard
          logo="/portfolio_mukunda/UNTLOGO.jpg"
          altText="UNT Logo"
          university="University of North Texas"
          degree="Masters in Artificial Intelligence"
          duration="Jan 2023 - Dec 2024"
          gpa="3.45/4.0"
          coursework={[
            "Data Structures",
            "Algorithms",
            "Distributed Systems",
            "Databases",
          ]}
        />

        <EducationCard
          logo="/portfolio_mukunda/SCSVMV_LOGO.jpg"
          altText="SCSVMV University Logo"
          university="SCSVMV University"
          degree="B.Tech in Computer Science"
          duration="July 2017 - May 2021"
          gpa="8.40/10"
          coursework={[
            "Data Structures",
            "Algorithms",
            "Networking",
            "Distributed Systems",
            "Databases",
          ]}
        />
      </div>
    </section>
  );
};

const EducationCard = ({ logo, altText, university, degree, duration, gpa, coursework }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="flex flex-col bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-105 w-full border border-gray-300"
      onClick={() => setIsOpen(!isOpen)} // Toggle isOpen when the card is clicked
    >
      <div className="flex items-center space-x-4 cursor-pointer">
        <img src={logo} alt={altText} className="w-14 h-14 object-contain rounded-full" />
        <div className="text-left">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-1">
            <FaUniversity className="text-gray-600" /> <span>{university}</span>
          </h3>
          <p className="text-gray-700 flex items-center space-x-1">
            <FaGraduationCap className="text-gray-500" /> <span>{degree}</span>
          </p>
          <p className="text-gray-500 flex items-center space-x-1">
            <FaCalendarAlt className="text-gray-400" /> <span>{duration}</span>
          </p>
          <p className="text-gray-500 flex items-center space-x-1">
            <FaStar className="text-yellow-500" /> <span>GPA: {gpa}</span>
          </p>
        </div>
      </div>

      {/* Click-to-Reveal Coursework */}
      {isOpen && coursework && (
        <div className="mt-3 text-gray-700 text-sm border-t pt-3">
          <strong>Relevant coursework:</strong> {coursework.join(", ")}.
        </div>
      )}
    </div>
  );
};
