import PropTypes from "prop-types";
import { MdOutlineWrongLocation } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import './card.css'
const ServiceCard = ({ data }) => {
  const { imageUrl, serviceName, description, serviceArea, price } = data;

  return (
    <div className="px-8 py-5 bg-primary/75 border border-primary rounded space-y-3 relative c">
      <div className="relative overflow-hidden rounded transition duration-300">
        <img className="w-full h-60 object-cover" src={imageUrl} alt={serviceName} />
        <div className="absolute inset-0 bg-black opacity-75 transition duration-500 cOverlay"></div>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-base-200 font-bold p-1">{serviceName}</h1>
          <div className="flex items-center gap-5">
            <h1 className="px-3 py-1 bg-accent/50 text-base-100 backdrop-blur-xl w-fit rounded-full flex items-center gap-1 cursor-pointer">
              <MdOutlineWrongLocation className="p-1 text-2xl" />
              <span className="text-xs font-bold hover:underline transition">
                {serviceArea}
              </span>
            </h1>
            <h1 className="px-3 py-1 bg-accent/50 text-base-100 backdrop-blur-xl w-fit rounded-full flex items-center gap-1 cursor-pointer">
              <IoPricetagsOutline className="p-1 text-2xl" />
              <span className="text-sm font-bold hover:underline transition">
                {price}
              </span>
            </h1>
          </div>
        </div>
        <p className="text-gray-500">{description.slice(0, 100)}....</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServiceCard;
