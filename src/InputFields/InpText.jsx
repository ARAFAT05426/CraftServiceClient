import PropTypes from "prop-types";

const InpText = ({ name, title, register, id, cStyle = "" }) => {
  return (
    <div className="flex flex-col space-y-1">
      <h1 className={`pl-1 font-bold text-xs lg:text-lg text-text`}>{title}</h1>
      <input
        className={`px-7 py-3 font-semibold w-full rounded-sm bg-base-200 col-span-2 ${cStyle}`}
        placeholder={`Enter Your ${title}`}
        type="text"
        {...register(name, { required: true })}
        id={id}
      />
    </div>
  );
};
InpText.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func.isRequired,
  title: PropTypes.string,
  id: PropTypes.string,
  cStyle: PropTypes.string,
};

export default InpText;
