import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function Single({ item }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="portfolio-img" ref={ref}>
            <img src={item.img} />
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
