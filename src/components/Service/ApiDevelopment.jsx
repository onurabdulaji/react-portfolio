import { Briefcase } from "react-bootstrap-icons";
import serviceData from "../../Data/serviceData";

const ApiDevelopment = () => {
  const apiService = serviceData.find(
    (service) => service.title === "Custom API Development & Integration"
  );
  return (
    <div
      className="col-lg-4 col-md-6 service-item d-flex"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="icon flex-shrink-0">
        <Briefcase />
      </div>
      <div>
        <h4 className="title">
          <a href="service-details.html" className="stretched-link">
            {apiService.title}
          </a>
        </h4>
        <p className="description">{apiService.description}</p>
      </div>
    </div>
  );
};

export default ApiDevelopment;
