import PropTypes from 'prop-types';
import './btn_CSS.css'
const Btn_Elevate = ({text}) => {
  return (
    <button className="Elevate">
      <span>{text}</span>
    </button>
  );
};
Btn_Elevate.propTypes ={
    text: PropTypes.string
}
export default Btn_Elevate;
