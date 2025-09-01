import { motion } from "framer-motion";
import s from "./Skills.module.scss";

// Data Analyst-specific Hard Skills
const hardSkillsData = [
  { name: "Python", level: 90 },
  { name: "SQL", level: 95 },
  { name: "Tableau", level: 85 },
  { name: "Excel", level: 95 },
  { name: "Power BI", level: 80 },
  { name: "Pandas", level: 85 },
  { name: "Web scraping", level: 75 },
];

// Data Analyst-specific Soft Skills
const softSkillsData = [
  { name: "Problem Solving", level: 95 },
  { name: "Statistical Thinking", level: 85 },
  { name: "Data Storytelling", level: 90 },
  { name: "Attention to Detail", level: 85 },
];

const Skills = () => {
  return (
    <section className={s.skillsSection}>
      {/* Hard Skills Section with Elegant Progress Bar */}
      <div className={s.hardSkills}>
        <h2>Technical Skills</h2>
        <div className={s.skillsGrid}>
          {hardSkillsData.map((skill) => (
            <div key={skill.name} className={s.skill}>
              <h4>{skill.name}</h4>
              <div className={s.progressBarContainer}>
                <motion.div
                  className={s.progressBar}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <span>{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills Section with Circles */}
      <div className={s.softSkills}>
        <h2>Professional Skills</h2>
        <div className={s.skillsGrid}>
          {softSkillsData.map((skill) => (
            <div key={skill.name} className={s.skillCircle}>
              <motion.div
                className={s.circle}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
