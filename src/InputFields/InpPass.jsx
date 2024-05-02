import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
const InpPass = ({ hColor }) => {
  const [hide, setHide] = useState(false);
  return (
    <div className="flex flex-col space-y-1">
      <h1 className={`pl-1 font-bold text-lg ${hColor}`}>Password</h1>
      <div className="flex items-center bg-base-200 focus-within:outline rounded outline-base-content outline-2">
        <input
          className={`px-7 py-3 w-full font-semibold rounded-sm outline-none bg-base-200`}
          placeholder={"Password"}
          type={hide ? "text" : "password"}
          name=""
          id=""
        />
        <button onClick={() => setHide(!hide)} className="pr-5 py-2 cursor-pointer">
          {hide ? (
            <AiOutlineEyeInvisible className="text-3xl" />
          ) : (
            <AiOutlineEye className="text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};
InpPass.propTypes = {
  hColor: PropTypes.string,
  placeholder: PropTypes.string,
};
export default InpPass;
