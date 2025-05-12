// src/components/Navigation.jsx
import React from "react";
import { List } from "react-bootstrap-icons";
import { navLinksData } from "../../Data/navData";

const Navigation = ({ isMobileNavOpen }) => {
  return (
    <nav
      id="navmenu"
      className={`navmenu ${isMobileNavOpen ? "navmenu-mobile-open" : ""}`}
    >
      <ul>
        {navLinksData.map((navItem, index) => (
          <li key={index}>
            <a href={navItem.href} className={navItem.active ? "active" : ""}>
              {navItem.icon && <navItem.icon className="navicon" />}
              {navItem.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
