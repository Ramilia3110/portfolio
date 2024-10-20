import React from "react";
import { motion } from "framer-motion";
import s from "./Hero.module.scss";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/CV.pdf"; // Update this path to your CV file
    link.download = "Ramilia_Imankulova_CV.pdf";
    link.click();
  };

  return (
    <motion.div
      className={s.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className={s.hero_content}>
        {/* Hero Text */}
        <motion.div
          className={s.hero_text}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h3>Hello, I'm</h3>
          <h1>Ramilia Imankulova</h1>
          <h5 className={s.animatedText}>Frontend Developer</h5>
          <p>
            I'm passionate about building beautiful, responsive, and dynamic web
            applications.
          </p>

          {/* Download CV Button */}
          <motion.button
            className={s.downloadCV}
            onClick={downloadCV}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>

          {/* Social Media Icons */}
          <div className={s.social}>
            <motion.a
              href="https://github.com/Ramilia3110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className={s.social_icon} />
            </motion.a>
            {/* <motion.a
              href="https://instagram.com/your-instagram-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram className={s.social_icon} />
            </motion.a> */}
            <motion.a
              href="https://www.linkedin.com/in/ramilia-imankulova-88825415b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedinIn className={s.social_icon} />
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <div className={s.images}>
          <motion.div
            className={s.hero_img}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
