import PropTypes from 'prop-types';
import './btn_CSS.css'
const Btn_Lifted = ({text}) => {
  return <button className='lifted'>{text}</button>;
};
Btn_Lifted.propTypes = {
    text: PropTypes.string
}
export default Btn_Lifted;
