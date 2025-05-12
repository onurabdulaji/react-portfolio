import { CardChecklist } from "react-bootstrap-icons";
import serviceData from "../../Data/serviceData";

const WebApplication = () => {
  const webAppService = serviceData.find(
    (serviceData) =>
      serviceData.title === "Web Application Development (Full-Stack)"
  );
  return (
    <div
      className="col-lg-4 col-md-6 service-item d-flex"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="icon flex-shrink-0">
        <CardChecklist />
      </div>
      <div>
        <h4 className="title">
          <a href="service-details.html" className="stretched-link">
            {webAppService.title}
          </a>
        </h4>
        <p className="description">{webAppService.description}</p>
      </div>
    </div>
  );
};

export default WebApplication;
