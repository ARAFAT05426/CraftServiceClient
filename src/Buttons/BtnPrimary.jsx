import PropTypes from 'prop-types';
import './BtnCss.css'
const BtnPrimary = ({text, cStyle, form}) => {
    return (
        <button form={form} className={`primary ${cStyle}`}>
            {text}
        </button>
    );
};
BtnPrimary.propTypes ={
    form: PropTypes.string,
    text: PropTypes.string,
    cStyle: PropTypes.string
}
export default BtnPrimary;