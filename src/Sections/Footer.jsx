import { Fade } from "react-awesome-reveal"; // Import Fade animation from react-awesome-reveal
import { FiLink, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-base-200 rounded text-base-content">
      <div className="p-4 flex flex-col lg:flex-row justify-around items-center sm:p-12">
        {/* Left_Area */}
        <div className="text-center">
          <Fade> {/* Add Fade animation */}
            <h1 className="text-2xl font-bold text-base-content">Irene Sims</h1>
          </Fade>
          <Fade> {/* Add Fade animation */}
            <p className="text-sm">VP of Sales, SomeCompany</p>
          </Fade>
        </div>
        {/* Divider_Area */}
        <div className="w-full h-[2px ] my-4 bg-base-content rounded lg:w-1 lg:h-28"></div>
        <div className="flex flex-col items-center lg:items-start">
          <Fade cascade> {/* Add Fade animation */}
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
      <div className="bg-base-300 ">
        <Fade> {/* Add Fade animation */}
          <div className="p-3 text-sm flex items-center justify-center max-w-lg mx-auto gap-3">
            <a
              href="#_"
              className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-black"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="#_"
              className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-black"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="#_"
              className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-black"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="#_"
              className="p-3 transition duration-500 ease-in-out rounded-full hover:bg-black"
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Footer;
