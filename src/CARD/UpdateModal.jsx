import { useState } from "react";
import PropTypes from "prop-types";
import { FaRegEdit } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Fade, Flip } from "react-awesome-reveal";
import InpText from "../InputFields/InpText";
import InpAny from "../InputFields/InpAny";
import BtnPrimary from "../Buttons/BtnPrimary";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
const UpdateModal = ({ id, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    try {
      await axiosSecure.put(`/services/${id}`, data);
      await refetch()
      setIsOpen(!isOpen)
      toast.success("Service updated successfully.", {
        position: "top-center",
        style: {
          backgroundColor: "#007bff",
          color: "white",
        }
      });
    } catch (err) {
      console.log(err);
      toast.error("An error occurred while updating the service.", {
        position: "top-center",
        style: {
          backgroundColor: "#dc3545",
          color: "white",
        }
      });
    }
  };
  return (
    <div>
      {/* Open the UpdateModal using onClick */}
      <button
        className="p-2 bg-blue-400 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaRegEdit className="text-xl text-base-100" />
      </button>

      {/* UpdateModal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative bg-base-100 p-6 rounded-lg shadow-lg">
            <div className="flex justify-end p-3">
              <h1
                onClick={() => setIsOpen(!isOpen)}
                className="text-end cursor-pointer"
              >
                <IoIosCloseCircleOutline className="text-3xl font-bold" />
              </h1>
            </div>
            <div className="w-full space-y-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                id="service"
                className="grid grid-cols-2 gap-y-2 gap-x-5 items-center"
              >
                <Fade direction="right" duration={500}>
                  <div>
                    <InpText
                      title={"New Service Name"}
                      id={"serviceName"}
                      name={"serviceName"}
                      register={register}
                    />
                  </div>
                </Fade>
                <Fade direction="right" delay={500}>
                  <div>
                    <InpAny
                      title={"New Price"}
                      type={"number"}
                      name={"price"}
                      id={"servicePrice"}
                      register={register}
                    />
                  </div>
                </Fade>
                <Fade className="col-span-2" direction="right" delay={700}>
                  <div>
                    <InpText
                      title={"Service Area"}
                      id={"serviceArea"}
                      name={"serviceArea"}
                      register={register}
                    />
                  </div>
                </Fade>
                <Fade className="col-span-2" direction="right" delay={900}>
                  <div>
                    <div>
                      <InpAny
                        title={"New Service Image"}
                        type={"url"}
                        name={"imgURL"}
                        register={register}
                      />
                    </div>
                  </div>
                </Fade>
                <Fade className="col-span-2" direction="right" delay={1100}>
                  <div>
                    <h1 className="text-lg font-bold">Description</h1>
                    <textarea
                      className="w-full border bg-base-200 px-5 font-semibold py-3 rounded"
                      rows={"7"}
                      placeholder="Update Your Service Description Here..."
                      {...register("description", { required: true })}
                    ></textarea>
                  </div>
                </Fade>
              </form>
              <Flip direction="horizontal" delay={1300}>
                <div>
                  <BtnPrimary
                    title={"Add Service"}
                    form={"service"}
                    cStyle={"w-full"}
                  />
                </div>
              </Flip>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
UpdateModal.propTypes = {
  id: PropTypes.string.isRequired,
  refetch: PropTypes.func
};
export default UpdateModal;
