import PropTypes from 'prop-types';
import './BtnCss.css'
const BtnSecondary = ({title, cStyle, form}) => {
    return (
        <button form={form} className={`secondary ${cStyle} border-2 border-primary text-xs lg:text-lg before:bg-primary`}>
            {title}
        </button>
    );
};
BtnSecondary.propTypes ={
    form: PropTypes.string,
    title: PropTypes.string,
    cStyle: PropTypes.string
}
export default BtnSecondary;