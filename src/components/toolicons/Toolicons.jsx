import React from "react";
import s from "./Toolicons.module.scss";
import { TbBrandPython } from "react-icons/tb"; // Note: Often FaPython is used for brand color
import {
  SiPostgresql,
  SiTableau,
  SiGooglesheets, // Google Sheets might be better represented by a more specific icon if available or just a green/blue combo
  SiLooker,
  SiSelenium, // Selenium isn't typically a data analysis tool like the others, but I'll keep it as requested
} from "react-icons/si";
import { FcStatistics } from "react-icons/fc"; // This icon's color is fixed by design
import { FaFileExcel } from "react-icons/fa";

const Toolicons = () => {
  return (
    <div className={s.running_icons}>
      <div className={s.icon_row}>
        <div className={s.ball}>
          <FaFileExcel color="#217346" /> {/* Microsoft Excel Green */}
        </div>
        <div className={s.ball}>
          <FcStatistics /> {/* Fixed color icon, often blue/orange */}
        </div>
        <div className={s.ball}>
          <SiSelenium color="#43B02A" /> {/* Selenium Green */}
        </div>
        <div className={s.ball}>
          <TbBrandPython color="#3776AB" /> {/* Python Blue */}
        </div>
        <div className={s.ball}>
          <SiPostgresql color="#336791" /> {/* PostgreSQL Blue */}
        </div>
        <div className={s.ball}>
          <SiTableau color="#E97627" /> {/* Tableau Orange */}
        </div>
        <div className={s.ball}>
          <SiLooker color="#4285F4" /> {/* Looker/Google Blue */}
        </div>
        <div className={s.ball}>
          <SiGooglesheets color="#34A853" /> {/* Google Sheets Green */}
        </div>
      </div>
    </div>
  );
};

export default Toolicons;
