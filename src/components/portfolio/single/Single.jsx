import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Single({ item }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Adjusting the offset to ensure scrolling behavior
  });

  // Move the text container up as you scroll
  const y = useTransform(scrollYProgress, [0, 0.9], [50, -50]); // Start moving up and stop before the end

  // Fade out the text container as you scroll

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="portfolio-img">
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>
              <a href={item.url}>See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
