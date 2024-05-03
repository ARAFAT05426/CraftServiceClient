import PropTypes from "prop-types";

const InpEmail = ({ register }) => {
  return (
    <div className="flex flex-col space-y-1">
      <h1 className={`pl-1 font-bold text-lg text-white`}>Email</h1>
      <input
        className={`px-7 py-3 w-full font-semibold rounded-sm bg-base-200`}
        placeholder={"Enter Your Email"}
        type="email"
        {...register("email")}
      />
    </div>
  );
};

InpEmail.propTypes = {
  register: PropTypes.func,
};

export default InpEmail;
