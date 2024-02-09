import { useState } from "react";
import "./Sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(120rem at 3.5rem 3.5rem)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(1.8rem at 4rem 3.2rem)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
