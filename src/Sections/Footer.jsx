<<<<<<< HEAD
import { Fade } from "react-awesome-reveal"; // Import Fade animation from react-awesome-reveal
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '/resources/logo.png'
const Footer = () => {
  return (
    <div className="bg-base-200 rounded text-base-content overflow-hidden">
      <div className="p-4 flex flex-col lg:flex-row justify-around items-center sm:p-12">
        {/* Left_Area */}
        <div className="text-center">
          <Fade>
            <h1 className="text-2xl font-bold text-base-content">
              <img className="w-1/4 mx-auto" src={logo} alt="" />
            </h1>
          </Fade>
          <Fade>
            <p className="text-sm font-semibold">Best home-repair</p>
          </Fade>
        </div>
        {/* Divider_Area */}
        <div className="w-full h-[2px] my-4 bg-secondary rounded lg:w-1 lg:h-28"></div>
        <div className="w-3/4 lg:w-2/5 flex flex-col items-center lg:items-start">
          <Fade cascade>
            <div className="flex items-center py-1">
              <FiMail className="text-base-content" size={18} />
              <span className="px-4">kraftfix@gmail.com</span>
            </div>
            <div className="flex items-center py-1">
              <FiPhone className="text-base-content" size={18} />
              <span className="px-4">+012 6666 8888</span>
            </div>
            <div className="flex items-center py-1">
              <FiMapPin className="text-base-content" size={18} />
              <span className="px-4">Austin, Texas</span>
            </div>
          </Fade>
        </div>
      </div>
      <div className="bg-base-300">
        <Fade>
          <div className="p-3 text-sm flex items-center justify-center max-w-lg mx-auto gap-3">
            <a
              href="#_"
              className="p-2 transition duration-500 ease-in-out rounded-full hover:bg-secondary"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="#_"
              className="p-2 transition duration-500 ease-in-out rounded-full hover:bg-secondary"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="#_"
              className="p-2 transition duration-500 ease-in-out rounded-full hover:bg-secondary"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </Fade>
        <h1 className="text-center font-bold text-sm">Copyright © 2024 KraftFix. All rights reserved</h1>
      </div>
    </div>
=======
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {  Link } from "react-router-dom";
import useCallContext from "../Hooks/useCallContext";

const Footer = () => {
  const { user } = useCallContext();

  const links = (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/allTouristSpots"}>All Tourist Spots</Link>
      <Link to={"/addSpots"}>Add Spots</Link>
      {user?.displayName && <Link to={"/myList"}>My List</Link>}
      <Link to={"/contact"}>Contact</Link>
    </>
  );

  return (
    <section className="bg-footer_bg">
      <footer className="px-4 divide-y bg-footer_bg text-gray-800">
        <div className="container flex flex-col justify-between py-10 mx-auto lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a rel="noopener noreferrer" className="flex justify-center space-x-3 lg:justify-start">
              <img className="w-2/6" src="/public/Resources/logo.png" alt="" />
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-slate-400 font-semibold">Links</h3>
              <ul className="space-y-1 flex flex-col">{links}</ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-slate-400 font-semibold">Help</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#privacy">
                    klicktrips@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-slate-400 font-semibold">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#developer">
                    Khan
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-slate-400 font-semibold">Social media</div>
              <div className="flex justify-start space-x-3">
                <a href="#facebook" className="flex items-center p-1 hover:text-blue-600">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#twitter" className="flex items-center p-1 hover:text-blue-400">
                  <FaTwitter className="text-3xl" />
                </a>
                <a href="#instagram" className="flex items-center p-1 hover:text-pink-500">
                  <FaInstagram className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-gray-600">
          © 2024 KlickTrips Co. All rights reserved.
        </div>
      </footer>
    </section>
>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8
  );
};

export default Footer;
