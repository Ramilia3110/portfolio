import { motion } from "framer-motion";
import s from "./About.module.scss";
import beforeImage from "../../assets/d3.jpg";
import { FaChartLine, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      className={s.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className={s.title}>About Me</h1>
      <div className={s.content}>
        <motion.div
          className={s.me}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.img src={beforeImage} alt="Profile" />
        </motion.div>
        <div className={s.text}>
          <div className={s.education}>
            <div className={s.box}>
              <FaChartLine />
              <h3>Experience</h3>
              <p>2+ years</p>
              <p>Data Analysis</p>
            </div>
            <div className={s.box}>
              <FaGraduationCap />
              <h3>Education</h3>
              <p>Applied Mathematics & Computer Science</p>
              <p>M.Sc. Master's Degree</p>
            </div>
          </div>
          <div className={s.bio}>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              I’m a passionate Data Analyst specializing in transforming raw
              data into clear, actionable insights.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              My goal is to use data-driven storytelling to help businesses
              solve complex problems and make informed decisions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              style={{ background: "none" }}
            >
              I believe in the power of continuous learning and leveraging tools
              like **SQL**, **Python**, and **Tableau** to create impactful
              solutions.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
