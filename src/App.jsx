import { useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

import Portfolio from "./components/portfolio/Portfolio";

import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Toolicons from "./components/toolicons/Toolicons";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="homepage">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <Toolicons />
      <section id="skills">
        <Skills />
      </section>

      <section id="services">
        <Services />
      </section>

      <Footer />
    </>
  );
}

export default App;
