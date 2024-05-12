import { useLoaderData } from "react-router-dom";
import serviceDetailsBg from "/resources/serviceDetailsBg.jpg";
import { Typewriter } from "react-simple-typewriter";
import { TbClock24 } from "react-icons/tb";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { TbLicense } from "react-icons/tb";
import { BsTools } from "react-icons/bs";
import { BsCardHeading } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineWrongLocation } from "react-icons/md";
import Modal from "../CARD/Modal";
const ServiceDetails = () => {
  const data = useLoaderData();
  const {
    imgURL,
    serviceName,
    description,
    serviceArea,
    price,
    providerImage,
    providerName,
  } = data;
  return (
    <section className="pt-20">
      <div
        className="bg-center bg-cover bg-no-repeat h-[40vh] lg:h-[55vh] flex flex-col items-center justify-center space-y-3"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${serviceDetailsBg})`,
        }}
      >
        <h1 className="text-center font-bold text-4xl lg:text-7xl text-gray-300">
          Life is simple
          <span className="font-sideHeading text-primary ml-2">
            <Typewriter
              words={["KraftFix", "Easy", "Functional"]}
              cursor
              cursorStyle="|"
              loop
            />
          </span>
        </h1>
        <div className=" w-full lg:w-3/5 mx-auto flex items-center justify-between py-2 lg:py-10">
          <div className="text-primary text-center">
            <TbClock24 className="text-5xl lg:text-8xl mx-auto font-black" />
            <h1 className="text-center text-xs lg:text-lg font-semibold text-secondary">
              AVAILABLE 24 HOURS
            </h1>
          </div>
          <div className="text-primary text-center">
            <HiCurrencyBangladeshi className="text-5xl lg:text-8xl mx-auto font-black" />
            <h1 className="text-center text-xs lg:text-lg font-semibold text-secondary">
              LOW COST
            </h1>
          </div>
          <div className="text-primary text-center">
            <TbLicense className="text-5xl lg:text-8xl mx-auto font-black" />
            <h1 className="text-center text-xs lg:text-lg font-semibold text-secondary">
              LICENSED & INSURED
            </h1>
          </div>
          <div className="text-primary text-center">
            <BsCardHeading className="text-5xl lg:text-8xl mx-auto font-black" />
            <h1 className="text-center text-xs lg:text-lg font-semibold text-secondary">
              WARRANTY & MAINTENANCE
            </h1>
          </div>
          <div className="text-primary text-center">
            <BsTools className="text-5xl lg:text-8xl mx-auto font-black" />
            <h1 className="text-center text-xs lg:text-lg font-semibold text-secondary">
              SKILLED HANDYMAN
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-base-200 w-[90%] mx-auto px-7 py-5 -mt-12 lg:-mt-32 mb-4 flex flex-col lg:flex-row gap-10">
        <img
          className="w-full lg:w-1/2 h-[30vh] lg:h-[50vh]"
          src={imgURL}
          alt=""
        />
        <div className="flex flex-col w-full space-y-3">
          <div className="flex flex-col space-y-3 w-full grow">
            <h1 className="text-4xl font-bold text-secondary">{serviceName}</h1>
            <p className="font-semibold">{description}</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-primary bg-opacity-70 px-5 py-1 w-fit rounded-full text-xl font-semibold">
                <IoPricetagsOutline />
                <h1>{price}</h1>
              </div>
              <div className="flex items-center gap-2 bg-primary bg-opacity-70 px-5 py-1 w-fit rounded-full text-xl font-semibold">
                <MdOutlineWrongLocation />
                <h1>{serviceArea}</h1>
              </div>
            </div>
            <hr className="border-b-secondary border-b opacity-50 border-opacity-50" />
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={providerImage}
                alt=""
              />
              <h1 className="text-2xl font-semibold">{providerName}</h1>
            </div>
          </div>
          <Modal data={data} />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
