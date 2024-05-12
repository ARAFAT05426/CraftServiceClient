import PropTypes from "prop-types";
const InpDummy = ({ title, placeholder }) => {
  return (
    <div className="flex flex-col space-y-1">
      <h1 className={`pl-1 font-bold text-sm lg:text-lg text-text`}>{title}</h1>
      <input
        disabled
        className=" px-3 lg:px-5 py-1 lg:py-3 border border-base-200 text-xs lg:text-base w-full rounded"
        placeholder={placeholder}
      />
    </div>
  );
};
InpDummy.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.any,
};
export default InpDummy;
