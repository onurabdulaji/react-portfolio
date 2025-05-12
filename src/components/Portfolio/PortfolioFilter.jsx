import React from "react";

const PortfolioFilter = ({ filterKey, setFilterKey }) => {
  const filters = [
    { label: "All", key: "*" },
    { label: "App", key: ".filter-app" },
  ];

  return (
    <ul
      className="portfolio-filters isotope-filters"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {filters.map((filter) => (
        <li
          key={filter.key}
          className={filterKey === filter.key ? "filter-active" : ""}
          onClick={() => setFilterKey(filter.key)}
        >
          {filter.label}
        </li>
      ))}
    </ul>
  );
};

export default PortfolioFilter;
