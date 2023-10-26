import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";

const Skills = () => {
  const skills = [
    { icon: <BsGithub size={30} /> },
    { icon: <BsLinkedin size={30} /> },
    { icon: <HiMailOpen size={30} /> },
  ];

  return (
    <div id="skills" className="bg-gray-100 py-16 w-[90%] mx-auto">
      <div className="container w-[80%]  mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-black mb-6">
          Contact Me
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-[7rem] h-[3.5rem] bg-gray-300 text-white rounded-full flex items-center justify-center p-4 text-sm hover:bg-blue-900 transform transition duration-300 hover:scale-110"
            >
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
