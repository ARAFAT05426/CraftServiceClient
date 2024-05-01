import PropTypes from 'prop-types';
import './btn_CSS.css'
const Btn_Illuminate = ({text, cStyle}) => {
    return (
        <button className={`illuminate ${cStyle}`}>
            {text}
        </button>
    );
};
Btn_Illuminate.propTypes ={
    text: PropTypes.string,
    cStyle: PropTypes.string
}
export default Btn_Illuminate;