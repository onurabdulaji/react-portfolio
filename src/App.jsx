import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import StatSection from "./components/StatSection";
import Skill from "./components/Skill";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Footer from "./components/Footer";
import React from "react";
import Contact from "./components/Contact";
import Scroll from "./components/Scroll";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <StatSection />
        <Skill />
        <Resume />
        <Portfolio />
        <Service />
        <Contact />
      </main>
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
