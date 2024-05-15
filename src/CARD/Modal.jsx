import { useState } from "react";
import PropTypes from "prop-types";
import BtnPrimary from "../Buttons/BtnPrimary";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import InpDummy from "../InputFields/InpDummy";
import useCallContext from "../Hooks/useCallContext";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const Modal = ({ data = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useCallContext();
  const {
    _id,
    imgURL,
    serviceName,
    serviceArea,
    price,
    providerName,
    providerEmail,
  } = data;
  const axiosSecure = useAxiosSecure()
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data, e) => {
    const bookingData = {
      serviceId: _id,
      serviceName,
      serviceImage: imgURL,
      providerEmail,
      providerName,
      price,
      userName: user?.displayName,
      userEmail: user?.email,
      serviceDate: startDate,
      instructions: data.instructions,
      status: "pending",
    };
    if(user?.email == providerEmail){
      return Swal.fire(
        "Forbidden",
        "You cant bid on your own service.",
        "error"
      );
    }
    try {

      const res = await axiosSecure.post('/bookings', bookingData);
      setIsOpen(!isOpen)
      e.target.reset();
      Swal.fire(
        "Service Booked",
        "The service has been booked successfully.",
        "success"
      );
      console.log(res.data);
    } catch (error) {
      console.error("An error occurred while processing your booking. Please try again later.", error);
      toast.error("Failed to process booking. Please try again later.", {
        position: "top-center",
        style: {
          backgroundColor: "#dc3545",
          color: "white",
        },
      });
    }
  };
  
  return (
    <div className="relative">
      <BtnPrimary
        title={"Book Now"}
        click={() => setIsOpen(!isOpen)}
        cStyle={"w-full"}
      />
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative bg-base-100 rounded-lg shadow-lg">
            <div className="flex justify-end p-3">
              <h1
                onClick={() => setIsOpen(!isOpen)}
                className="text-end cursor-pointer"
              >
                <IoIosCloseCircleOutline className="text-3xl font-bold" />
              </h1>
            </div>
            <div style={{scrollbarWidth: 'thin'}} className="px-4 lg:px-10 pb-4 lg:pb-10 w-[80vw] h-fit lg:h-[55vh] overflow-y-auto space-y-2 lg:space-y-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                id="book"
                className="grid grid-cols-2 gap-x-5 gap-1 lg:gap-y-3"
              >
                <Fade className="w-full">
                  <InpDummy
                    title={"Service Name"}
                    placeholder={serviceName + " (not editable)"}
                  />
                </Fade>
                <Fade className="w-full">
                  <InpDummy
                    title={"Service Area"}
                    placeholder={serviceArea + " (not editable)"}
                  />
                </Fade>
                <Fade className="w-full">
                  <InpDummy
                    title={"Provider Name"}
                    placeholder={providerName + " (not editable)"}
                  />
                </Fade>
                <Fade className="w-full">
                  <InpDummy
                    title={"Provider Email"}
                    placeholder={providerEmail + " (not editable)"}
                  />
                </Fade>
                <Fade className="w-full">
                  <InpDummy
                    title={"Consumer Name"}
                    placeholder={user?.displayName + " (not editable)"}
                  />
                </Fade>
                <Fade className="w-full">
                  <InpDummy
                    title={"Consumer Email"}
                    placeholder={user?.email + " (not editable)"}
                  />
                </Fade>
                {/* Date Picker */}
                <div className="w-full rounded space-y-1 z-20">
                  <h1 className={`pl-1 font-bold text-sm lg:text-lg text-text`}>
                    Pick Your Date
                  </h1>
                  <DatePicker
                    className="px-3 lg:px-5 py-1 lg:py-3 font-semibold text-xs lg:text-base border border-base-200 bg-base-200/75 rounded w-[35vw] lg:w-[37vw] cursor-pointer"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <Fade className="w-full">
                  <InpDummy
                    title={"Price"}
                    placeholder={price + " (not editable)"}
                  />
                </Fade>
                <Fade className="w-full col-span-2">
                  <InpDummy
                    title={"Service Image"}
                    placeholder={imgURL + " (not editable)"}
                  />
                </Fade>
                {/* Special Instruction */}
                <div className="col-span-2">
                  <h1 className={`pl-1 font-bold text-sm lg:text-lg text-text`}>
                    Special Instruction
                  </h1>
                  <textarea
                    className="w-full px-5 py-3 font-semibold bg-base-200"
                    placeholder="Special Instruction"
                    {...register("instructions", { required: true })}
                    rows={4}
                  ></textarea>
                </div>
              </form>
              <Fade>
                <BtnPrimary
                  form={"book"}
                  title={"Purchase"}
                  cStyle={"w-full"}
                />
              </Fade>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
Modal.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Modal;
