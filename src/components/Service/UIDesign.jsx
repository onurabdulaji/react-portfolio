import { BarChart } from "react-bootstrap-icons";
import serviceData from "../../Data/serviceData";

const UIDesign = () => {
  const uiDesign = serviceData.find(
    (service) => service.title === "UI/UX Design and Development (React)"
  );
  return (
    <div
      className="col-lg-4 col-md-6 service-item d-flex"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="icon flex-shrink-0">
        <BarChart />
      </div>
      <div>
        <h4 className="title">
          <a href="service-details.html" className="stretched-link">
            {uiDesign.title}
          </a>
        </h4>
        <p className="description">{uiDesign.description}</p>
      </div>
    </div>
  );
};

export default UIDesign;
