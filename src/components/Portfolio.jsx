import PortfolioFilter from "./Portfolio/PortfolioFilter";
import PortfolioItem from "./Portfolio/PortfolioItem";
import { useState } from "react";

const Portfolio = () => {
  const [filterKey, setFilterKey] = useState("*");

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Welcome to my portfolio section. Here, I showcase selected projects
          reflecting my skills, problem-solving approaches, and passion for
          technology. By Browse these works, which include web development,
          mobile applications, personal experiments, and various digital
          solutions, you can learn more about the technologies and approaches I
          used.
        </p>
      </div>

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <PortfolioFilter filterKey={filterKey} setFilterKey={setFilterKey} />
          <PortfolioItem filterKey={filterKey} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
