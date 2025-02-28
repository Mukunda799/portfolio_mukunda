import { useState } from "react";
import { FaUniversity, FaGraduationCap, FaCalendarAlt, FaStar } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll"; 
import ConnectWithMe from "./ConnectWithMe";

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
              src="..\pedrotech-portfolio\public\DSC_0463.JPG" // Update your profile pic path here
              alt="Mukunda Krishna Ramisetti"
              className="w-65 h-65 object-cover rounded-full mb-6" // Change to object-contain to avoid cropping
            />
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I’m Mukunda Krishna Ramisetti
            </h1>
          </div>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I’m a full-stack developer passionate about crafting clean, scalable
            web applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            >
              View Projects
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
          logo="/path-to-njit-logo.png"
          altText="NJIT Logo"
          university="New Jersey Institute of Technology"
          degree="Masters in Computer Science"
          duration="Sept 2022 - May 2024"
          gpa="4.0/4.0"
          coursework={[
            "Data Structures",
            "Algorithms",
            "Distributed Systems",
            "Databases",
          ]}
        />

        <EducationCard
          logo="/path-to-anna-university-logo.png"
          altText="Anna University Logo"
          university="Anna University"
          degree="B.Tech in Information Technology"
          duration="July 2016 - May 2020"
          gpa="8.32/10"
          coursework={[
            "Data Structures",
            "Algorithms",
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
