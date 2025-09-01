import { motion } from "framer-motion";
import styles from "./ProjectPage.module.scss";
import topPolluted from "../../assets/top_polluted_cities.png";
import scatter from "../../assets/correlation_analysis.png";
import pm25 from "../../assets/pm25.png";
import mm from "../../assets/map.png";
// Reusable animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ProjectPage = () => {
  return (
    <div className={styles.projectPage}>
      <h2 className={styles.heading}>My Latest Project</h2>
      {/* --- Project Header --- */}
      <motion.header
        className={styles.projectHeader}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>🌍 Air Quality & Health Analysis</h1>
        <p className={styles.subtitle}>
          A Data-Driven Investigation into Air Pollution's Impact on Global Life
          Expectancy
        </p>
      </motion.header>

      {/* --- Project Summary --- */}
      <motion.section
        className={styles.summary}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={styles.sectionContent}>
          <h2>Project Overview</h2>
          <p>
            This project analyzes air quality data from various cities around
            the world and explores its correlation with health indicators like
            life expectancy. The analysis is based on three main datasets:
            aqi_ranking, life_expectancy, and air_quality_data.
          </p>
          <p>
            This data provides insights into the relationship between air
            quality and health outcomes in various cities. The analysis covers
            three key areas: the most polluted cities, the correlation between
            air quality and life expectancy, and the most dominant pollutants.
          </p>
        </div>
      </motion.section>

      {/* --- Methodology Section --- */}
      <motion.section
        className={styles.methodology}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={styles.sectionContent}>
          <h2>Methodology & Tools</h2>
          <p>
            The data was collected from open-source platforms using **web
            scraping <span className={styles.blue}>(Selenium)</span> and direct{" "}
            <span className={styles.blue}>API calls</span>. The raw data was
            then processed and organized using **Python**. For storage and
            analysis, a **PostgreSQL** database was used.
          </p>
          <ul className={styles.toolsList}>
            <li>**Programming:** Python, SQL</li>
            <li>**Data Collection:** Selenium, API Calls</li>
            <li>**Database:** PostgreSQL</li>
            <li>**Data Analysis:** Pandas, NumPy</li>
            <li>**Visualization:** Matplotlib, Seaborn (for project charts)</li>
          </ul>
        </div>
      </motion.section>

      {/* --- Key Findings Section --- */}
      <motion.section
        className={styles.findings}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Key Findings & Insights</h2>
        <div className={styles.findingsGrid}>
          {/* Finding 1: Geographic Pollution Patterns */}
          <div className={styles.findingItem}>
            <h3>1. Geographic Pollution Patterns</h3>
            <p>
              Analysis of the `aqi_ranking` table reveals that cities in Asia
              and Africa are disproportionately affected by poor air quality.
              Urbanization and industrialization are key drivers, with several
              cities having multiple cities in the top 50 worst-ranked
              locations.
            </p>

            {/* Replace with your chart */}
            <div className={styles.chartContainer}>
              <p>
                <img src={topPolluted} />
              </p>
            </div>
          </div>

          {/* Finding 2: The Impact on Life Expectancy */}
          <div className={styles.findingItem}>
            <h3>2. Life Expectancy Gap</h3>
            <p>
              Countries with an AQI over 100 have an average life expectancy of
              **71.71 years**, compared to **77.21 years** in countries with an
              AQI of 100 or less—a difference of over 5 years. This correlation
              is even stronger when focusing on the most polluted regions
              (-0.37).
            </p>
            {/* Replace with your chart */}
            <div className={styles.chartContainer}>
              <p>
                <img src={scatter} />
              </p>
            </div>
          </div>

          {/* Finding 3: Continental Analysis & Outliers */}
          <div className={styles.findingItem}>
            <h3>3. Continental Trends & Outliers</h3>
            <p>
              A clear trend emerges when analyzing data by continent: regions
              with higher life expectancy (e.g., Europe) have better air
              quality. Outliers like **Qatar** and the **UAE** maintain a high
              life expectancy despite poor AQI, highlighting that wealth and
              strong healthcare can mitigate pollution's effects.
            </p>
            {/* Replace with a picture of a world map */}
            <div className={styles.imageContainer}>
              <p>
                {" "}
                <img src={mm} />
              </p>
            </div>
          </div>

          {/* Finding 4: Pollutant-Specific Risks */}
          <div className={styles.findingItem}>
            <h3>4. Pollutant-Specific Risks</h3>
            <p>
              Analysis shows that **Particulate Matter ($PM_{2.5}$ and $PM_{10}
              $)** is a primary concern with extreme levels in Manama and Doha.
              **Carbon Monoxide (CO)** also poses a significant risk in cities
              like Lahore. Over 25 cities in the dataset exceed WHO $PM_{2.5}$
              guidelines by 5-20 times.
            </p>
            {/* Replace with your chart or table */}
            <div className={styles.chartContainer}>
              <p>
                <img src={pm25} />
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- Conclusion & Recommendations --- */}
      <motion.section
        className={styles.conclusion}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={styles.sectionContent}>
          <h2>Key Conclusions</h2>
          <ul>
            <li>
              Air pollution significantly reduces life expectancy, particularly
              in developing regions.
            </li>
            <li>
              Economic wealth can buffer but not eliminate the health impacts of
              pollution.
            </li>
            <li>
              Particulate matter ($PM_{2.5}$) is the most significant pollutant
              for public health.
            </li>
          </ul>
          <h2>Recommendations</h2>
          <p>Based on these findings, I recommend:</p>
          <ul>
            <li>Immediate implementation of WHO air quality guidelines.</li>
            <li>Investment in renewable energy infrastructure.</li>
            <li>
              Targeted healthcare strengthening in high-pollution regions.
            </li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectPage;
