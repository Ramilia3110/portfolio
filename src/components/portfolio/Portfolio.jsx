import "./Portfolio.scss";
import { projects } from "../../data/projects";
import { Single } from "./single/Single";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Portfolio = () => {
  const progressRef = useRef();
  const portfolioRef = useRef();

  const { scrollYProgress } = useScroll({
    target: portfolioRef,
    offset: ["end end", "start end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
  });

  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const progressTop = progressRef.current?.getBoundingClientRect().top || 0;
      setIsAtTop(progressTop <= 0); // Check if `.progress` is at the top of the viewport
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio" ref={portfolioRef}>
      <div
        className={`progress ${isAtTop ? "scrolled" : ""}`}
        ref={progressRef}
      >
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
