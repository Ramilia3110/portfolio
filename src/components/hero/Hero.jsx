import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import s from "./Hero.module.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineTableChart, MdPercent } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiBarChartSquare, BiNetworkChart } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { IoDocumentOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Chart as ChartJs, defaults } from "chart.js/auto";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import doneProjects from "../../data/doneProjects";
import services from "../../data/services";
import { useInView } from "react-intersection-observer";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  // Intersection Observer for chart visibility
  const { ref: barRef, inView: barInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: lineRef, inView: lineInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: doughnutRef, inView: doughnutInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const chartOptions = {
    responsive: true,
    animation: {
      duration: 1000, // Duration of the animation when it is triggered
      easing: "easeInOutQuad",
    },
    // hover: {
    //   onHover: function (e) {
    //     const chart = this;
    //     const activePoints = chart.getElementsAtEventForMode(e, "nearest", {
    //       intersect: true,
    //     });
    //     if (activePoints.length > 0) {
    //       // Change background color on hover
    //       const index = activePoints[0].index;
    //       chart.data.datasets[0].backgroundColor = [
    //         "#FF5733", // Highlight color on hover
    //         "#FF8C00",
    //         "#DAF7A6",
    //       ];
    //       chart.update();
    //     } else {
    //       chart.data.datasets[0].backgroundColor = [
    //         "#2c4597",
    //         "#977e2c",
    //         "#4665c9",
    //       ];
    //       chart.update();
    //     }
    //   },
    // },
  };
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/CV.pdf"; // Update this path to your CV file
    link.download = "Ramilia_Imankulova_CV.pdf";
    link.click();
  };

  return (
    <>
      <div className={s.container}>
        <div className={`${s.tablet} ${scrolled ? s.scrolled : ""}`}>
          <div className={s.panel}>
            {[
              MdOutlineTableChart,
              BiBarChartSquare,
              RxUpdate,
              AiOutlineLineChart,
              BiNetworkChart,
              TbArrowsDoubleSwNe,
              IoDocumentOutline,
              MdPercent,
              IoIosInformationCircleOutline,
            ].map((Icon, index) => (
              <span key={index}>
                <Icon />
              </span>
            ))}
          </div>
          <div className={s.screen}>
            {/* Bar Chart */}
            <div
              ref={barRef}
              className={`${s.screen1} chart ${barInView ? s.animate : ""}`}
            >
              {barInView && (
                <Bar
                  data={{
                    labels: services.map((data) => data.label),
                    datasets: [
                      {
                        label: "Count",
                        data: services.map((data) => data.value),
                        backgroundColor: ["#3943b7", "#eaba6b", "#4665c9"],
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              )}
            </div>

            {/* Line Chart */}
            <div
              ref={lineRef}
              className={`${s.screen2} chart ${lineInView ? s.animate : ""}`}
            >
              {lineInView && (
                <Line
                  data={{
                    labels: doneProjects.map((data) => data.label),
                    datasets: [
                      {
                        label: "Projects",
                        data: doneProjects.map((data) => data.projects),
                        backgroundColor: "#27445D",
                        borderColor: "#EFE9D5",
                      },
                      {
                        label: "Completed",
                        data: doneProjects.map((data) => data.completed),
                        backgroundColor: "#F4F8D3",
                        borderColor: "#F7CFD8",
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              )}
            </div>
            <div className={s.screen3}>
              {/* Image Section */}
              <motion.div
                className={s.hero_img}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            {/* Doughnut Chart */}
            <div
              ref={doughnutRef}
              className={`${s.screen4} chart ${
                doughnutInView ? s.animate : ""
              }`}
            >
              {doughnutInView && (
                <Doughnut
                  data={{
                    labels: [
                      "Customer Satisfaction",
                      "New Ideas",
                      "Team Engagement",
                    ],
                    datasets: [
                      {
                        label: "Impact Areas",
                        data: [45, 25, 30], // You can adjust these percentages
                        backgroundColor: ["#bb9455", "#6b9bea", "#eaba6b"],
                        borderColor: "transparent",
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className={s.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className={s.hero_text}>
          <h3>Hello, I'm</h3>
          <h1>Ramilia Imankulova</h1>
          <h5>Frontend Developer</h5>
          <p>
            I'm passionate about building beautiful, responsive, and dynamic web
            applications.
          </p>
          <motion.button
            className={s.downloadCV}
            onClick={downloadCV}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </div>

        <div className={s.social}>
          <motion.a
            href="https://github.com/Ramilia3110"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ramilia-imankulova-88825415b/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedinIn />
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
