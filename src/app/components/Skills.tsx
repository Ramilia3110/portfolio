// components/Skills.js
import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiSass,
} from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiRedux } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <DiHtml5 size={50} /> },
    { name: "CSS3", icon: <DiCss3 size={50} /> },
    { name: "JavaScript", icon: <DiJavascript1 size={50} /> },
    { name: "React", icon: <DiReact size={50} /> },
    { name: "Redux", icon: <SiRedux size={50} /> },
    { name: "Node.js", icon: <DiNodejsSmall size={50} /> },
    { name: "Sass", icon: <DiSass size={50} /> },
    { name: "TypeScript", icon: <SiTypescript size={50} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={50} /> },
  ];

  return (
    <div id="skills" className="bg-gray-100 py-16 w-[90%] mx-auto">
      <div className="container w-[80%]  mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-[7rem] h-[3.5rem] bg-gray-300 text-white rounded-full flex items-center justify-center p-4 text-sm hover:bg-blue-900 transform transition duration-300 hover:scale-110"
            >
              {skill.icon}
              <span className="ml-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
