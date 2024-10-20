import React from "react";
import s from "./Toolicons.module.scss";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";

const Toolicons = () => {
  return (
    <div className={s.running_icons}>
      <div className={s.icon_row}>
        <div className={s.ball}>
          <FaReact color="#61DAFB" /> {/* React Icon */}
        </div>
        <div className={s.ball}>
          <FaHtml5 color="#E34F26" /> {/* HTML5 Icon */}
        </div>
        <div className={s.ball}>
          <FaCss3 color="#1572B6" /> {/* CSS3 Icon */}
        </div>
        <div className={s.ball}>
          <TbBrandJavascript color="#F7DF1E" /> {/* JavaScript Icon */}
        </div>
        <div className={s.ball}>
          <SiTypescript color="#007ACC" /> {/* TypeScript Icon */}
        </div>
        <div className={s.ball}>
          <SiRedux color="#764ABC" /> {/* Redux Icon */}
        </div>
        <div className={s.ball}>
          <FaBootstrap color="#7952B3" /> {/* Bootstrap Icon */}
        </div>
        <div className={s.ball}>
          <SiTailwindcss color="#38B2AC" /> {/* Tailwind CSS Icon */}
        </div>
      </div>
    </div>
  );
};

export default Toolicons;
