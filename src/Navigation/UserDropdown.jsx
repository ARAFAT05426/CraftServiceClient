import { useState } from "react";
import "./navBar.css";
import useCallContext from "../Hooks/useCallContext";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import BtnPrimary from "../Buttons/BtnPrimary";
const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const { user, signOutUSer} = useCallContext()
  const handleLogOut = async() => {
    await signOutUSer();
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
    <div className="user-dropdown flex flex-col items-center w-fit relative">
      <button className="z-10" onClick={toggleDropdown}>
        <img
          className="w-14 p-1 rounded-full"
          src={user?.photoURL}
          alt=""
        />
      </button>
      <div
        className={`dropdown-menu absolute bg-base-200 bg-opacity-85 right-0 space-y-2 top-full mt-2 text-center ${
          isOpen ? "h-auto py-5" : "h-0"
        }`}
      >
        <NavLink onClick={toggleDropdown} className="font-semibold px-3 py-1" to={'/bookedServices'}>Booked Service</NavLink>
        <NavLink onClick={toggleDropdown} className="font-semibold px-3 py-1" to={'/addService'}>Add Service</NavLink>
        <NavLink onClick={toggleDropdown} className="font-semibold px-3 py-1" to={'/manageService'}>Manage Service</NavLink>
        <NavLink onClick={toggleDropdown} className="font-semibold px-3 py-1" to={'/servicesToDo'}>Services To Do</NavLink>
        <BtnPrimary click={handleLogOut} title={'Log Out'} cStyle={'w-4/5 mx-auto'} />
      </div>
    </div>
  );
};

export default UserDropdown;
