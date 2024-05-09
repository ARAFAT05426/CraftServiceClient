import { useState } from "react";
import "./navBar.css";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-dropdown flex flex-col items-center relative">
      <button className="z-10" onClick={toggleDropdown}>
        <img
          className="w-12 rounded-full p-1"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt=""
        />
      </button>
      <div
        className={`dropdown-menu absolute bg-white/35 backdrop-blur-3xl top-full mt-3 px-2 ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <p className={`text-gray-800`}>Profile</p>
        <p className={`text-gray-800`}>Profile</p>
      </div>
    </div>
  );
};

export default UserDropdown;
