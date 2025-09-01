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

  const handleToggle = () => setIsMobile((prev) => !prev);

  const handleScroll = () => {
    const sections = [
      "#homepage",
      "#about",
      "#portfolio",
      "#skills",
      "#services",
    ];
    const scrollPosition = window.scrollY + 100; // Offset for navbar height

    sections.forEach((section) => {
      const element = document.querySelector(section);
      if (
        element &&
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
      exit={{ y: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className={s.container}>
        <div className={s.logo}>
          <h1>RI</h1>
        </div>
        <div className={`${s.links} ${isMobile ? s.mobile : ""}`}>
          {[
            { href: "#homepage", icon: <FaHome />, label: "Home" },
            { href: "#about", icon: <FaUser />, label: "About" },
            { href: "#portfolio", icon: <FaSuitcase />, label: "Portfolio" },
            { href: "#skills", icon: <FaTools />, label: "Skills" },
            { href: "#services", icon: <FaEnvelope />, label: "Services" },
          ].map(({ href, icon, label }) => (
            <a
              key={href}
              href={href}
              className={activeLink === href ? s.active : ""}
              onClick={() => {
                setIsMobile(false);
                setActiveLink(href);
              }}
            >
              {icon} {label}
            </a>
          ))}
        </div>
        <div
          className={`${s.hamburger} ${isMobile ? s.open : ""}`}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
