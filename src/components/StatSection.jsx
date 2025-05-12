import { statsData } from "../Data/statData";
import StatItem from "./Stats/StatItem";

const StatSection = () => {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {statsData.map((item, index) => (
            <StatItem
              key={index}
              label={item.label}
              value={item.value}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;
