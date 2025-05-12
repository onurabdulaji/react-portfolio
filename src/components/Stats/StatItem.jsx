import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  EmojiSmile,
  FolderFill,
  LifePreserver,
  PersonFill,
} from "react-bootstrap-icons";

const Icons = {
  smile: EmojiSmile,
  folder: FolderFill,
  support: LifePreserver,
  worker: PersonFill,
};

const StatItem = ({ label, value, icon }) => {
  const IconComponent = Icons[icon] || Icons.smile;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="col-lg-3 col-md-6">
      <div className="stats-item" ref={ref}>
        <IconComponent color="#149ddd" size={60} />
        <span className="purecounter">
          {inView && <CountUp start={0} end={value} duration={1.5} />}
        </span>
        <p>
          <strong>{label}</strong>
        </p>
      </div>
    </div>
  );
};

export default StatItem;
