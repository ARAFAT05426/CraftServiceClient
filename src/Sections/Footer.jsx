import { FiLink, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-base-200 rounded text-base-content">
      <div className="p-4 flex flex-col lg:flex-row justify-around items-center sm:p-12">
        {/* Left_Area */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-base-content">Irene Sims</h1>
          <p className="text-sm">VP of Sales, SomeCompany</p>
        </div>
        {/* Divider_Area */}
        <div className="w-4/5 h-1 my-4 bg-base-content rounded lg:w-1 lg:h-28"></div>
        <div className="flex flex-col items-center lg:items-start">
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
        </div>
      </div>
      <div className="bg-base-300 ">
        <div className="p-4 text-sm flex items-center justify-center">
          <a
            href="#_"
            className="block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-black"
          >
            <FaFacebook className="inline-block mr-2" size={20} />
          </a>
          <a
            href="#_"
            className="block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-black"
          >
            <FaTwitter className="inline-block mr-2" size={20} />
          </a>
          <a
            href="#_"
            className="block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-black"
          >
            <FaInstagram className="inline-block mr-2" size={20} />
          </a>
          <a
            href="#_"
            className="block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-black"
          >
            <FaBehance className="inline-block mr-2" size={20} />
          </a>
          <a
            href="#_"
            className="block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-black"
          >
            <FaGithub className="inline-block mr-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
