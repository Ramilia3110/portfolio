import "./Navbar.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ramilia's Portfolio
        </motion.span>
        <div className="social">
          <a>
            <BsGithub className="icon" />
          </a>
          <a>
            <BsLinkedin className="icon" />
          </a>
          <a>
            <HiMailOpen className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
