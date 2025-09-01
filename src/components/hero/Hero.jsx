import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import s from "./Hero.module.scss";
import { FaGithub } from "react-icons/fa";
import { MdOutlineTableChart, MdPercent } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiBarChartSquare, BiNetworkChart } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { IoDocumentOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Chart as ChartJs, defaults } from "chart.js/auto";
import { Line, Doughnut, Bar, Radar } from "react-chartjs-2";
import { useInView } from "react-intersection-observer";

// New Data Objects for a Data Analyst Portfolio
const projectTypes = [
  { label: "Predictive Models", count: 4 },
  { label: "Dashboarding", count: 7 },
  { label: "ETL Pipelines", count: 3 },
];

const skillProficiency = [
  { skill: "SQL", proficiency: 90 },
  { skill: "Python", proficiency: 85 },
  { skill: "Tableau", proficiency: 80 },
  { skill: "Excel", proficiency: 95 },
  { skill: "Pwer BI", proficiency: 85 },
];

const projectTechStack = [
  { stack: "Python", value: 50 },
  { stack: "SQL", value: 35 },
  { stack: "Tableau", value: 15 },
];

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

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
  const { ref: radarRef, inView: radarInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const chartOptions = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
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
            {/* Project Types - Bar Chart */}
            <div
              ref={barRef}
              className={`${s.screen1} ${s.chart} ${
                barInView ? s.animate : ""
              }`}
            >
              <h4 className={s.chartTitle}>Project Types</h4>
              {barInView && (
                <Bar
                  data={{
                    labels: projectTypes.map((data) => data.label),
                    datasets: [
                      {
                        label: "Projects",
                        data: projectTypes.map((data) => data.count),
                        backgroundColor: ["#3943b7", "#eaba6b", "#4665c9"],
                        borderRadius: 5,
                      },
                    ],
                  }}
                  options={{
                    ...chartOptions,
                    scales: {
                      x: { display: true, grid: { display: false } },
                      y: { display: true, grid: { display: false } },
                    },
                  }}
                />
              )}
            </div>

            {/* Project Timeline - Line Chart */}
            <div
              ref={lineRef}
              className={`${s.screen2} ${s.chart} ${
                lineInView ? s.animate : ""
              }`}
            >
              <h4 className={s.chartTitle}>Project Timeline</h4>
              {lineInView && (
                <Line
                  data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                      {
                        label: "Completed Projects",
                        data: [1, 2, 4, 3, 5, 7],
                        backgroundColor: "#27445D",
                        borderColor: "#F7CFD8",
                        tension: 0.4,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                      },
                    ],
                  }}
                  options={{
                    ...chartOptions,
                    scales: {
                      x: { display: true, grid: { display: false } },
                      y: { display: true, grid: { display: false } },
                    },
                  }}
                />
              )}
            </div>

            {/* Tech Stack - Doughnut Chart */}
            <div
              ref={doughnutRef}
              className={`${s.screen3} ${s.chart} ${
                doughnutInView ? s.animate : ""
              }`}
            >
              <h4 className={s.chartTitle}>Tech Stack Usage</h4>
              {doughnutInView && (
                <Doughnut
                  data={{
                    labels: projectTechStack.map((data) => data.stack),
                    datasets: [
                      {
                        label: "Percentage",
                        data: projectTechStack.map((data) => data.value),
                        backgroundColor: ["#bb9455", "#6b9bea", "#eaba6b"],
                        borderColor: "transparent",
                      },
                    ],
                  }}
                  options={{ ...chartOptions, cutout: "60%" }}
                />
              )}
            </div>

            {/* Skill Proficiency - Radar Chart (New) */}
            <div
              ref={radarRef}
              className={`${s.screen4} ${s.chart} ${
                radarInView ? s.animate : ""
              }`}
            >
              <h4 className={s.chartTitle}>Skills Proficiency</h4>
              {radarInView && (
                <Radar
                  data={{
                    labels: skillProficiency.map((data) => data.skill),
                    datasets: [
                      {
                        label: "Proficiency (%)",
                        data: skillProficiency.map((data) => data.proficiency),
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        borderColor: "#3b82f6",
                        borderWidth: 2,
                        pointBackgroundColor: "#3b82f6",
                      },
                    ],
                  }}
                  options={{
                    ...chartOptions,
                    scales: {
                      r: {
                        angleLines: { color: "#ddd" },
                        grid: { color: "#ddd" },
                        pointLabels: { font: { size: 12 } },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        ticks: { display: false },
                      },
                    },
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
