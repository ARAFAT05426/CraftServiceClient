import PropTypes from "prop-types";
const InpAny = ({ title, type, name, cStyle, register, id }) => {
  return (
    <div className="flex flex-col space-y-1">
      <h1 className={`pl-1 font-bold text-xs lg:text-lg text-text`}>{title}</h1>
      <input
        className={`px-7 py-3 w-full font-semibold rounded-sm bg-base-200 ${cStyle}`}
        placeholder={`Enter Your ${title}`}
        {...register(name, { required: true })}
        type={type}
        id={id}
      />
    </div>
  );
};
InpAny.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  cStyle: PropTypes.string,
  register: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.string
};
export default InpAny;
