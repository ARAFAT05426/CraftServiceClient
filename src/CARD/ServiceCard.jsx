import PropTypes from "prop-types";
import { MdOutlineWrongLocation } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import BtnSecondary from "../Buttons/BtnSecondary";
import { Link } from "react-router-dom";
import "./card.css";
// import { Fade } from "react-awesome-reveal";
const ServiceCard = ({ data }) => {
  const {
    _id,
    imgURL,
    serviceName,
    description,
    serviceArea,
    price,
    providerImage,
    providerName,
  } = data;
  return (
    <div className="px-8 py-5 bg-base-200 border border-primary/35 rounded space-y-3 relative c shadow-lg hover:shadow-xl">
      <div className="relative overflow-hidden rounded transition duration-300">
        <img
          className="w-full h-60 object-cover"
          src={imgURL}
          alt={serviceName}
        />
        <div className="absolute inset-0 bg-black opacity-75 transition duration-500 cOverlay"></div>
      </div>
      <div className="mt-3">
        <div className="flex flex-col items-start justify-between">
          <h1 className=" text-xl lg:text-3xl text-primary font-bold p-1">{serviceName}</h1>
          <div className="flex items-center gap-5">
            <h1 className="px-2 lg:px-3 py-1 bg-accent/25 text-base-100 backdrop-blur-xl w-fit rounded-full flex items-center gap-1 cursor-pointer">
              <MdOutlineWrongLocation className="p-1 text-2xl text-secondary" />
              <span className="text-xs font-bold hover:underline text-base-content transition">
                {serviceArea}
              </span>
            </h1>
            <h1 className="px-2 lg:px-3 py-[2px] lg:py-1 bg-accent/25 text-base-100 backdrop-blur-xl w-fit rounded-full flex items-center gap-1 cursor-pointer">
              <IoPricetagsOutline className="p-1 text-2xl text-secondary" />
              <span className="text-sm font-bold hover:underline text-base-content transition">
                {price}
              </span>
            </h1>
          </div>
        </div>
        <p className="text-base-content text-xs lg:text-lg">{description.slice(0, 100)}....</p>
      </div>
      <hr className="border-b-base-content" />
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-1">
          <img className="w-7 h-7 rounded-full" src={providerImage} alt="" />
          <span className="font-bold text-xs lg:text-lg hover:underline transition-all duration-500">{providerName}</span>
        </div>
        <Link to={`/serviceDetails/${_id}`} className="cardBtn opacity-0">
          <BtnSecondary title={'View Details'} />
        </Link>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServiceCard;
