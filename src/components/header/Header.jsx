import { motion } from "framer-motion";
import styles from "./Header.module.scss";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import pic from "../../assets/hero.jpg";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.container}>
        {/* Text Section */}
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            Саламатсызбы, I’m {/* "Hello" in Kyrgyz - a nice local touch! */}
            <span className={styles.gradientText}>Ramilia Imankulova</span>
          </h1>
          <p className={styles.subtitle}>
            Data Analyst | SQL • Python • Excel • Tableau
          </p>
          <p className={styles.description}>
            I transform raw data into actionable insights with clean analysis,
            interactive dashboards, and compelling data storytelling. Currently
            seeking junior Data Analyst opportunities.
          </p>
          <div className={styles.buttons}>
            <motion.a
              href="https://github.com/Ramilia3110"
              target="_blank"
              rel="noreferrer"
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ramilia-imankulova-88825415b/"
              target="_blank"
              rel="noreferrer"
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
            <motion.a
              href="./assets/CV.pdf"
              target="_blank"
              rel="noreferrer"
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileAlt /> Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className={styles.imageBlock}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={pic}
            alt="Ramilia Imankulova, Data Analyst" // More descriptive alt text
            className={styles.profileImg}
          />
        </motion.div>
      </div>

      {/* Background Shapes */}
      <div className={styles.bgShapes}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.blob3}></div> {/* Added another blob */}
      </div>
    </section>
  );
};

export default Header;
