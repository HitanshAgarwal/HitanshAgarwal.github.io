import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Curriculars from "./components/Curriculars";
import "./App.css";

const App: React.FC = () => {
  const [lightMode, setLightMode] = useState(false);
  const toggleBackground = () => {
    setLightMode((prev) => !prev);
  };
  return (
    <div
      className={lightMode ? "light-mode" : "dark-mode"}
      style={{
        backgroundColor: lightMode ? "#ffffff" : "#000000",
        color: lightMode ? "#000000" : "#ffffff",
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
    >
      <main>
        <section id="home">
          <Hero toggleBackground={toggleBackground} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="curriculars">
          <Curriculars />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
