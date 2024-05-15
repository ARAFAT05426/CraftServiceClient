import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const Links = ({func, stat}) => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    const pathname = location.pathname;
    setActiveRoute(pathname);
  }, [location]);

  return (
    <Fade cascade direction="down" duration={600} className="flex">
      <NavLink onClick={() =>func(!stat)} to={"/"} className={`cBtn hover:border-b-primary ${activeRoute === "/" ? "bg-primary" : ""}`}>
        Home
      </NavLink>
      <NavLink onClick={() =>func(!stat)} to={"/services"} className={`cBtn hover:border-b-primary ${activeRoute === "/services" ? "bg-primary" : ""}`}>
      Services
      </NavLink>
      <NavLink onClick={() =>func(!stat)} to={"/about"} className={`cBtn hover:border-b-primary ${activeRoute === "/about" ? "bg-primary" : ""}`}>
        About
      </NavLink>
      <NavLink onClick={() =>func(!stat)} to={"/contact"} className={`cBtn hover:border-b-primary ${activeRoute === "/contact" ? "bg-primary" : ""}`}>
        Contact
      </NavLink>
    </Fade>
  );
};
Links.propTypes ={
  func: PropTypes.func,
  stat: PropTypes.bool
}
export default Links;
