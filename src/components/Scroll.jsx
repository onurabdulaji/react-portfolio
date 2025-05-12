import React, { useEffect, useState } from "react";
import { ArrowUpShort } from "react-bootstrap-icons";

const Scroll = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
      onClick={scrollToTop}
      className={`scroll-top d-flex align-items-center justify-content-center ${
        visible ? "active" : ""
      }`}
      style={{
        position: "fixed",
        right: "20px",
        zIndex: 99999,
      }}
    >
      <ArrowUpShort size={"36px"} />
    </a>
  );
};

export default Scroll;
