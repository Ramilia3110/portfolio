import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaSuitcase,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";
import s from "./Navbar.module.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("#homepage");

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const handleScroll = () => {
    const sections = [
      "#homepage",
      "#about",
      "#portfolio",
      "#skills",
      "#services",
    ];
    const scrollPosition = window.scrollY + 100; // Offset for the navbar height

    sections.forEach((section) => {
      const element = document.querySelector(section);
      if (
        element.offsetTop <= scrollPosition &&
        element.offsetTop + element.offsetHeight > scrollPosition
      ) {
        setActiveLink(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={s.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={s.container}>
        <div className={s.logo}>
          <h1>Ramilia's Portfolio</h1>
        </div>
        <div className={`${s.links} ${isMobile ? s.mobile : ""}`}>
          <a
            href="#homepage"
            className={activeLink === "#homepage" ? s.active : ""}
            onClick={handleToggle}
          >
            <FaHome /> Home
          </a>
          <a
            href="#about"
            className={activeLink === "#about" ? s.active : ""}
            onClick={handleToggle}
          >
            <FaUser /> About
          </a>
          <a
            href="#portfolio"
            className={activeLink === "#portfolio" ? s.active : ""}
            onClick={handleToggle}
          >
            <FaSuitcase /> Portfolio
          </a>
          <a
            href="#skills"
            className={activeLink === "#skills" ? s.active : ""}
            onClick={handleToggle}
          >
            <FaTools /> Skills
          </a>
          <a
            href="#services"
            className={activeLink === "#services" ? s.active : ""}
            onClick={handleToggle}
          >
            <FaEnvelope /> Services
          </a>
        </div>
      </div>
      <div className={s.hamburger} onClick={handleToggle}>
        <span className={isMobile ? s.open : ""}></span>
        <span className={isMobile ? s.open : ""}></span>
        <span className={isMobile ? s.open : ""}></span>
      </div>
    </motion.nav>
  );
};

export default Navbar;
