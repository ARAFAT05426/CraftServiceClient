import { FiLink, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-base-200 rounded text-base-content">
      <div className="p-4 lg:flex lg:justify-around lg:items-center sm:p-12">
        {/* Left_Area */}
        <div className="lg:text-center">
          <h1 className="text-2xl font-bold text-base-content">Irene Sims</h1>
          <p className="text-sm">VP of Sales, SomeCompany</p>
        </div>
        {/* Divider_Area */}
        <div className="w-16 h-1 my-4 bg-base-content rounded lg:w-1 lg:h-16"></div>
        <div>
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
        <div className="p-4 text-sm md:flex md:items-center md:justify-center">
          <a
            href="#_"
            className="block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-black"
          >
            <span>Facebook</span>
          </a>
          <a
            href="#_"
            className="block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-black"
          >
            <span>Twitter</span>
          </a>
          <a
            href="#_"
            className="block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-black"
          >
            <span>Instagram</span>
          </a>
          <a
            href="#_"
            className="block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-black"
          >
            <span>Behance</span>
          </a>
          <a
            href="#_"
            className="block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-black"
          >
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
