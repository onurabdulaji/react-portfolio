import React, { useState, useRef } from "react";
import { List } from "react-bootstrap-icons";
import Profile from "./Header/Profile";
import Logo from "./Header/Logo";
import SocialLinks from "./Header/SocialLinks";
import Navigation from "./Header/Navigation";

const Header = () => {
  const headerRef = useRef(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column ${
        isMobileNavOpen ? "header-show" : ""
      }`}
      ref={headerRef}
    >
      <List className="header-toggle d-xl-none bi" onClick={toggleMobileNav} />
      <Profile />
      <Logo />
      <SocialLinks />
      {/* Navigation is now always rendered within the header */}
      <Navigation isMobileNavOpen={isMobileNavOpen} />
    </header>
  );
};

export default Header;
