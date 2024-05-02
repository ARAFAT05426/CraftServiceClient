import PropTypes from "prop-types";

const InpText = ({ title, hColor, placeholder }) => {
  return (
    <div className="flex flex-col space-y-1">
      <h1 className={`pl-1 font-bold text-lg ${hColor}`}>{title}</h1>
      <input
        className={`px-7 py-3 w-full font-semibold rounded-sm bg-base-200`}
        placeholder={placeholder}
        type="text"
        name=""
        id=""
      />
    </div>
  );
};
InpText.propTypes = {
  title: PropTypes.string,
  hColor: PropTypes.string,
  placeholder: PropTypes.string,
};
export default InpText;
