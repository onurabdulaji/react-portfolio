import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { ZoomIn, Link45deg } from "react-bootstrap-icons";

import app1logo from "../../assets/img/starcompany.png";

const PortfolioItem = ({ filterKey }) => {
  const items = [
    { id: 1, category: ".filter-app", name: "Star Company", imgSrc: app1logo },
    // { id: 2, category: ".filter-web", name: "Web Project", imgSrc: app1logo },
  ];

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    return () => lightbox.destroy();
  }, []);

  return (
    <div className="portfolio-items">
      {items
        .filter((item) => filterKey === "*" || item.category === filterKey)
        .map((item) => (
          <div
            key={item.id}
            className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="portfolio-content h-100">
              <img
                src={item.imgSrc}
                className="img-fluid"
                alt={`${item.name} Preview`}
              />
              <div className="portfolio-info">
                <h4>{item.name}</h4>
                <p>Web Site Development</p>
                <a
                  href={item.imgSrc}
                  title={`${item.name} Preview`}
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                  aria-label={`Preview ${item.name} Website`}
                >
                  <ZoomIn />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                  aria-label={`More details about ${item.name}`}
                >
                  <Link45deg />
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PortfolioItem;
