import PropTypes from "prop-types";
const InpAny = ({ title }) => {
  return (
    <div className="flex flex-col space-y-1">
      <h1 className={`pl-1 font-bold text-lg text-white`}>{title}</h1>
      <input
        className={`px-7 py-3 w-full font-semibold rounded-sm bg-base-200`}
        placeholder={`Enter Your ${title}`}
        type="text"
      />
    </div>
  );
};
InpAny.propTypes = {
  title: PropTypes.string,
};
export default InpAny;
