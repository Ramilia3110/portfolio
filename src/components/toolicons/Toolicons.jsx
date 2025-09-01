import React from "react";
import s from "./Toolicons.module.scss";
import { TbBrandPython } from "react-icons/tb";
import {
  SiPostgresql,
  SiTableau,
  SiGooglesheets,
  SiLooker,
  SiSelenium,
} from "react-icons/si";
import { FcStatistics } from "react-icons/fc";
import { FaFileExcel } from "react-icons/fa";

const Toolicons = () => {
  return (
    <div className={s.running_icons}>
      <div className={s.icon_row}>
        <div className={s.ball}>
          <FaFileExcel color="#61DAFB" /> {/* React Icon */}
        </div>
        <div className={s.ball}>
          <FcStatistics color="#E34F26" /> {/* HTML5 Icon */}
        </div>
        <div className={s.ball}>
          <SiSelenium color="#1572B6" /> {/* CSS3 Icon */}
        </div>
        <div className={s.ball}>
          <TbBrandPython color="#F7DF1E" /> {/* JavaScript Icon */}
        </div>
        <div className={s.ball}>
          <SiPostgresql color="#007ACC" /> {/* TypeScript Icon */}
        </div>
        <div className={s.ball}>
          <SiTableau color="#764ABC" /> {/* Redux Icon */}
        </div>
        <div className={s.ball}>
          <SiLooker color="#7952B3" /> {/* Bootstrap Icon */}
        </div>
        <div className={s.ball}>
          <SiGooglesheets color="#38B2AC" /> {/* Tailwind CSS Icon */}
        </div>
      </div>
    </div>
  );
};

export default Toolicons;
