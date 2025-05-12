import {
  HouseFill,
  PersonFill,
  FileEarmarkTextFill,
  ImageFill,
  HddStackFill,
  EnvelopeFill,
} from "react-bootstrap-icons";

export const navLinksData = [
  {
    text: "Home",
    href: "#hero",
    icon: HouseFill,
    className: "navicon",
    active: true,
  },
  {
    text: "About",
    href: "#about",
    icon: PersonFill,
    className: "navicon",
  },
  {
    text: "Resume",
    href: "#resume",
    icon: FileEarmarkTextFill,
    className: "navicon",
  },
  {
    text: "Portfolio",
    href: "#portfolio",
    icon: ImageFill,
    className: "navicon",
  },
  {
    text: "Services",
    href: "#services",
    icon: HddStackFill,
    className: "navicon",
  },
  {
    text: "Contact",
    href: "#contact",
    icon: EnvelopeFill,
    className: "navicon",
  },
];
