import PropTypes from 'prop-types';
import './BtnCss.css'
const BtnPrimary = ({title, click, cStyle, form}) => {
    return (
        <button onClick={click} form={form} className={`primary font-semibold text-text hover:text-white bg-primary shadow-custom shadow-black/45 ${cStyle}`}>
            {title}
        </button>
    );
};
BtnPrimary.propTypes ={
    form: PropTypes.string,
    title: PropTypes.string,
    cStyle: PropTypes.string,
    click: PropTypes.func
}
export default BtnPrimary;