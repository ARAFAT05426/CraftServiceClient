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
const Modal = ({ data = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useCallContext();
  const {
    imgURL,
    serviceName,
    serviceArea,
    price,
    providerName,
    providerEmail,
  } = data;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
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
            <div className="px-4 lg:px-10 pb-4 lg:pb-10 w-[80vw] space-y-2 lg:space-y-5">
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
                <Fade className="w-full z-20">
                  <div className="w-full rounded space-y-1">
                    <h1
                      className={`pl-1 font-bold text-sm lg:text-lg text-text`}
                    >
                      Pick Your Date
                    </h1>

                    <DatePicker
                      className="px-3 lg:px-5 py-1 lg:py-3 font-semibold text-xs lg:text-base border border-base-200 bg-base-200/75 rounded w-[35vw] lg:w-[38vw] cursor-pointer"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </Fade>
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
                <Fade className="col-span-2">
                  <h1 className={`pl-1 font-bold text-sm lg:text-lg text-text`}>
                    Special Instruction
                  </h1>
                  <textarea
                    className="w-full px-5 py-3 font-semibold bg-base-200"
                    placeholder="Special Instruction"
                    {...register("instrction", { required: true })}
                    rows={4}
                  ></textarea>
                </Fade>
              </form>
              <Fade>
                <BtnPrimary form={'book'} title={"Purchase"} cStyle={"w-full"} />
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
