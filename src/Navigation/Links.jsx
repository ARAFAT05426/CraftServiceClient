import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
const Links = () => {
  return (
    <Fade cascade direction="down" duration={600} className="flex">
      <NavLink to={"/"} className="cBtn">
        Home
      </NavLink>
      <NavLink to={"/form"} className="cBtn">
        Form
      </NavLink>
      <NavLink to={"/about"} className="cBtn">
        About
      </NavLink>
      <NavLink to={"/contact"} className="cBtn">
        Contact
      </NavLink>
    </Fade>
  );
};

export default Links;
