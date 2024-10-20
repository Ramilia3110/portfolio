import React from "react";
import { motion } from "framer-motion";
import s from "./Skills.module.scss";

const hardSkillsData = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Redux", level: 75 },
  { name: "Git", level: 70 },
  { name: "Figma", level: 60 },
];

const softSkillsData = [
  { name: "Communication", level: 80 },
  { name: "Problem Solving", level: 90 },
  { name: "Teamwork", level: 85 },
  { name: "Adaptability", level: 75 },
];

const Skills = () => {
  return (
    <section className={s.skillsSection}>
      {/* Hard Skills Section with Elegant Progress Bar */}
      <div className={s.hardSkills}>
        <h2>Hard Skills</h2>
        <div className={s.skillsGrid}>
          {hardSkillsData.map((skill) => (
            <div key={skill.name} className={s.skill}>
              <h4>{skill.name}</h4>
              <div className={s.progressBarContainer}>
                <motion.div
                  className={s.progressBar}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>
              <span>{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills Section with Circles */}
      <div className={s.softSkills}>
        <h2>Soft Skills</h2>
        <div className={s.skillsGrid}>
          {softSkillsData.map((skill) => (
            <div key={skill.name} className={s.skillCircle}>
              <motion.div
                className={s.circle}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <span>{skill.level}%</span>
              </motion.div>
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
