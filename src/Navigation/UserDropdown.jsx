import { useState } from "react";
import "./navBar.css";
import useCallContext from "../Hooks/useCallContext";
import toast from "react-hot-toast";
const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const {signOutUSer} = useCallContext()
  const handleLogOut = () => {
    signOutUSer();
    return toast.success(
      "we will be waiting",
      {
        position: "top-center",
        style: {
          backgroundColor: "#007bff",
          color: "white",
          fontSize: "13px",
        },
      }
    )
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
        className={`dropdown-menu absolute bg-white/35 backdrop-blur-3xl top-full mt-3 px-2 text-center ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <p className={`text-gray-800`}>Profile</p>
        <button onClick={handleLogOut} className={`text-gray-800`}>Log out</button>
      </div>
    </div>
  );
};

export default UserDropdown;
