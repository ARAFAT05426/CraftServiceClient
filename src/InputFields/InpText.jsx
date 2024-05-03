import PropTypes from "prop-types";

const InpText = ({ name, title, hColor, register }) => {
  return (
    <div className="flex flex-col space-y-1">
      <h1 className={`pl-1 font-bold text-lg ${hColor}`}>{title}</h1>
      <input
        className={`px-7 py-3 w-full font-semibold rounded-sm bg-base-200`}
        placeholder={`Enter Your ${title}`}
        type="text"
        {...register(name, { required: true })}
        id=""
      />
    </div>
  );
};

InpText.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func,
  hColor: PropTypes.string,
  title: PropTypes.string,
};

export default InpText;
