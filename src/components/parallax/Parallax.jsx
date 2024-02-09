import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services" ? "" : "linear-gradient(180deg, #0b0b0b,#010912",
      }}
    >
      <motion.h1 style={{ y: yBg }} className="parallax-title">
        {type === "services" ? "About Me" : "Latest Projects"}{" "}
      </motion.h1>

      <motion.div
        className={type === "services" ? "buildings" : "bg"}
      ></motion.div>
      {type === "services" && (
        <motion.div className="clouds" style={{ x: xBg }}></motion.div>
      )}
    </div>
  );
};

export default Parallax;
