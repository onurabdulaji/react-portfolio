import { Briefcase } from "react-bootstrap-icons";
import ServiceContent from "./Service/ServiceContent";
import ServiceTitle from "./Service/ServiceTitle";
import ServiceDescription from "./Service/ServiceDescription";

const Service = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <ServiceTitle />
        <ServiceDescription />
      </div>

      <div className="container">
        <div className="row gy-4">
          <ServiceContent />
        </div>
      </div>
    </section>
  );
};

export default Service;
