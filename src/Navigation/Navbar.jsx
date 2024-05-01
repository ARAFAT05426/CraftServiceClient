import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '/resources/logo.png' // Assuming logo path is correct
import './navBar.css';

const Navbar = () => {
  const [act, setAct] = useState(false);

  const links = (
    <>
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
    </>
  );

  return (
    <nav id="navBar" className="bg-base-100 h-16 backdrop:blur-2xl px-2 md:px-16 lg:px-28 shadow-xl z-50">
      {/* Left Area */}
      <div className="">
        <Link to="/">
          <img className="w-24" src={logo} alt="" /> {/* Adjust logo size if needed */}
        </Link>
      </div>
      {/* Center Area */}
      <div className="relative font-semibold">
        <div className="hidden lg:flex">{links}</div>
        {/* Small device links */}
        <div
          id="smallDeviceLinks"
          className={`flex lg:hidden bg-white/40 backdrop-blur-xl mt-8 ${
            act ? "h-[50vh] pt-7" : "h-0"
          }`}
        >
          {links}
        </div>
      </div>
      {/* Right Area */}
      <div className="flex items-center gap-1 lg:gap-4">
        {/* Toggle Button */}
        <div id="toggle" className="flex lg:hidden" onClick={() => setAct(!act)}>
          <div id="toggleBars" className={`${act ? "open" : ""}`}>
            <span className="bg-black"></span>
            <span className="bg-black"></span>
            <span className="bg-black"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
