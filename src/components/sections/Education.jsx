import React from 'react';
import { useState } from "react";
import { FaUniversity, FaGraduationCap, FaCalendarAlt, FaStar } from "react-icons/fa";
export const Education = () => {
  // This state keeps track of which card is open. Initially, no card is open.
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the visibility of the clicked card
  const toggleCard = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the card if it's already open
    } else {
      setOpenIndex(index); // Open the clicked card
    }
  };

  return (
    <section id="education" className="py-20 bg-black text-center flex flex-col items-center">
      <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
           Education
          </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
        <EducationCard
          logo="/portfolio_mukunda/UNTLOGO.jpg"
          altText="UNT Logo"
          university="University of North Texas"
          degree="Masters in Artificial Intelligence"
          duration="Jan 2023 - Dec 2024"
          gpa="3.45/4.0"
          coursework={[
            "Data Visualization", 
            "GEN AI", 
            "AI/ML", 
            "NLP",
            "LLMs",
            "Design and Analysis of Algorithms", 
            "Database Systems"
          ]}
          isOpen={openIndex === 0} // Pass true or false based on the clicked index
          toggleCard={() => toggleCard(0)} // Pass toggle function for the first card
        />

        <EducationCard
          logo="/portfolio_mukunda/SCSVMV_LOGO.jpg"
          altText="SCSVMV University Logo"
          university="SCSVMV University"
          degree="B.Tech in Computer Science"
          duration="July 2017 - May 2021"
          gpa="8.40/10"
          coursework={[
            "Advanced Data Structures and Algorithms",
            "Cloud Computing",
            "software Engineering",
            "Networking",
            "Databases",
            "Operating Systems"
          ]}
          isOpen={openIndex === 1} // Pass true or false based on the clicked index
          toggleCard={() => toggleCard(1)} // Pass toggle function for the second card
        />
      </div>
    </section>
  );
};

const EducationCard = ({ logo, altText, university, degree, duration, gpa, coursework, isOpen, toggleCard }) => {
  return (
    <div 
      className="flex flex-col bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-105 w-full border border-gray-300"
      onClick={toggleCard} // Use the passed toggle function
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
export default Education;