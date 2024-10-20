import React from "react";
import s from "./Services.module.scss";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "Building fast, responsive, and scalable web applications.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description:
        "Ensuring applications work on every device, screen size, and browser.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Crafting user-centric and beautiful designs using Figma.",
    },
    {
      icon: <FaRocket />,
      title: "Performance Optimization",
      description:
        "Making applications load faster and improving user experience.",
    },
  ];

  return (
    <section className={s.services}>
      <h1 className={s.title}>Services</h1>
      <div className={s.services_container}>
        {services.map((service, index) => (
          <motion.div
            className={s.service_card}
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={s.icon}>{service.icon}</div>
            <h3 className={s.service_title}>{service.title}</h3>
            <p className={s.description}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
