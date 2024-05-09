import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/resources/logo.png";
import { FiUserPlus } from "react-icons/fi";
import "./navBar.css";
import ThemeToggler from "./ThemeToggler";
import Links from "./Links";
import UserDropdown from "./UserDropdown";
const Navbar = () => {
  const [act, setAct] = useState(false);
  return (
    <nav
      id="navBar"
      className="bg-base-300 bg-opacity-70 h-16 backdrop-blur-2xl px-2 md:px-16 lg:px-28 shadow-xl z-50"
    >
      {/* Left Area */}
      <div className="flex items-center gap-1">
      <div
          id="toggle"
          className="flex lg:hidden"
          onClick={() => setAct(!act)}
        >
          <div id="toggleBars" className={`${act ? "open" : ""}`}>
            <span className="bg-black"></span>
            <span className="bg-black"></span>
            <span className="bg-black"></span>
          </div>
        </div>
        <Link to="/">
          <img className="w-24" src={logo} alt="" />{" "}
          {/* Adjust logo size if needed */}
        </Link>
      </div>
      {/* Center Area */}
      <div className="relative font-semibold">
        <div className="hidden lg:flex">
          <Links />
        </div>
        {/* Small device links */}
        <div
          id="smallDeviceLinks"
          className={`flex flex-col lg:hidden bg-white/40 backdrop-blur-xl mt-8 ${
            act ? "h-[50vh] pt-7" : "h-0"
          }`}
        >
          <Links />
        </div>
      </div>
      {/* Right Area */}
      <div className="flex items-center gap-2 lg:gap-4">
        <ThemeToggler />
        <UserDropdown />
        <Link to={"/signUp"}>
          <FiUserPlus className=" text-2xl lg:text-4xl" />
        </Link>
        {/* Toggle Button */}
       
      </div>
    </nav>
  );
};

export default Navbar;
