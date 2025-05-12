import React from "react";
import Background from "./Hero/Background";
import HeroContent from "./Hero/HeroContent";

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <Background />
      <HeroContent />
    </section>
  );
};

export default Hero;
