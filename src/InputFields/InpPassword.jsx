import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InpPassword = ({ register, errors }) => {
  const [hide, setHide] = useState(false);

  return (
    <div className="flex flex-col space-y-1">
      <h1 className={`pl-1 font-bold text-lg text-white`}>Password</h1>
      <div className="flex items-center bg-base-200 focus-within:outline rounded outline-base-content outline-2">
        <input
          className={`px-7 py-3 w-full font-semibold rounded-sm outline-none bg-base-200 ${
            errors && "border-red-500" // Add border color if error exists
          }`}
          placeholder={"Password"}
          type={hide ? "text" : "password"}
          {...register("pass", { required: true })}
        />
        <button
          onClick={() => setHide(!hide)}
          className="pr-5 py-2 cursor-pointer"
        >
          {hide ? (
            <AiOutlineEyeInvisible className="text-3xl" />
          ) : (
            <AiOutlineEye className="text-3xl" />
          )}
        </button>
      </div>
      {/* Display error message if exists */}
      {errors && (
        <p className="text-red-500 text-sm">{errors.pass && errors.pass.message}</p>
      )}
    </div>
  );
};

InpPassword.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object, // PropTypes for errors object
};

export default InpPassword;
