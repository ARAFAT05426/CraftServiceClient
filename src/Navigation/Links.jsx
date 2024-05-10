import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { NavLink, useLocation } from "react-router-dom";

const Links = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    const pathname = location.pathname;
    setActiveRoute(pathname);
  }, [location]);

  return (
    <Fade cascade direction="down" duration={600} className="flex">
      <NavLink to={"/"} className={`cBtn hover:border-b-primary ${activeRoute === "/" ? "bg-primary" : ""}`}>
        Home
      </NavLink>
      <NavLink to={"/services"} className={`cBtn hover:border-b-primary ${activeRoute === "/services" ? "bg-primary" : ""}`}>
      Services
      </NavLink>
      <NavLink to={"/about"} className={`cBtn hover:border-b-primary ${activeRoute === "/about" ? "bg-primary" : ""}`}>
        About
      </NavLink>
      <NavLink to={"/contact"} className={`cBtn hover:border-b-primary ${activeRoute === "/contact" ? "bg-primary" : ""}`}>
        Contact
      </NavLink>
    </Fade>
  );
};

export default Links;
