import { BrightnessHigh } from "react-bootstrap-icons";
import serviceDataForCommerce from "../../Data/serviceData";
const ECommerce = () => {
  const ecommerce = serviceDataForCommerce.find(
    (sep) => sep.title === "E-Commerce Solution Development"
  );
  return (
    <div
      className="col-lg-4 col-md-6 service-item d-flex"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div className="icon flex-shrink-0">
        <BrightnessHigh />
      </div>
      <div>
        <h4 className="title">
          <a href="service-details.html" className="stretched-link">
            {ecommerce.title}
          </a>
        </h4>
        <p className="description">{ecommerce.description}</p>
      </div>
    </div>
  );
};

export default ECommerce;
