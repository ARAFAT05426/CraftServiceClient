import { Fade } from "react-awesome-reveal"; // Import Fade animation from react-awesome-reveal
import { FiLink, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '/resources/logo.png'
const Footer = () => {
  return (
    <div className="bg-base-200 rounded text-base-content">
      <div className="p-4 flex flex-col lg:flex-row justify-around items-center sm:p-12">
        {/* Left_Area */}
        <div className="text-center">
          <Fade>
            <h1 className="text-2xl font-bold text-base-content">
              <img className="w-1/4 mx-auto" src={logo} alt="" />
            </h1>
          </Fade>
          <Fade>
            <p className="text-sm font-semibold">Best home-repair, SomeCompany</p>
          </Fade>
        </div>
        {/* Divider_Area */}
        <div className="w-full h-[2px] my-4 bg-secondary rounded lg:w-1 lg:h-28"></div>
        <div className="w-3/4 lg:w-2/5 flex flex-col items-center lg:items-start">
          <Fade cascade>
            <div className="flex items-center py-1">
              <FiMail className="text-base-content" size={18} />
              <span className="px-4">irene.sims@example.com</span>
            </div>
            <div className="flex items-center py-1">
              <FiPhone className="text-base-content" size={18} />
              <span className="px-4">+123-456-7890</span>
            </div>
            <div className="flex items-center py-1">
              <FiLink className="text-base-content" size={18} />
              <span className="px-4">example.com</span>
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
              className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-secondary"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="#_"
              className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-secondary"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="#_"
              className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-secondary"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </Fade>
        <h1 className="text-center font-bold text-sm">Copyright © 2024 KraftFix. All rights reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
