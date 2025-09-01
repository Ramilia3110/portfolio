import s from "./Services.module.scss";
import {
  FaDatabase,
  FaChartLine,
  FaChartBar,
  FaTachometerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <FaDatabase />,
      title: "Data Cleaning & Preprocessing",
      description:
        "Transforming raw, messy data into a clean, usable format for accurate analysis.",
    },
    {
      icon: <FaChartLine />,
      title: "Predictive Modeling",
      description:
        "Building machine learning models to forecast future trends and outcomes.",
    },
    {
      icon: <FaChartBar />,
      title: "Data Visualization & Reporting",
      description:
        "Creating compelling visualizations and reports that turn complex data into actionable insights.",
    },
    {
      icon: <FaTachometerAlt />,
      title: "BI Dashboarding",
      description:
        "Developing interactive business intelligence dashboards for real-time performance tracking and monitoring.",
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className={s.icon}
              whileHover={{ scale: 1.3, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {service.icon}
            </motion.div>
            <h3 className={s.service_title}>{service.title}</h3>
            <p className={s.description}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
