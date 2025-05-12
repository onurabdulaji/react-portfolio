import { Calendar4Week } from "react-bootstrap-icons";
import serviceDataForRTa from "../../Data/serviceData";

const RTA = () => {
  const rta = serviceDataForRTa.find(
    (spa) => spa.title === "Real-Time Applications (Chat/Notifications)"
  );
  return (
    <div
      className="col-lg-4 col-md-6 service-item d-flex"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <div className="icon flex-shrink-0">
        <Calendar4Week />
      </div>
      <div>
        <h4 className="title">
          <a href="service-details.html" className="stretched-link">
            {rta.title}
          </a>
        </h4>
        <p className="description">{rta.description}</p>
      </div>
    </div>
  );
};

export default RTA;
