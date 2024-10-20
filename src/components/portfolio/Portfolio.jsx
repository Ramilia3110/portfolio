import "./Portfolio.scss";
import { projects } from "../../data/projects";
import { Single } from "./single/Single";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Latest Projects</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      <div className="projectsContainer">
        {projects.map((item) => (
          <Single key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
