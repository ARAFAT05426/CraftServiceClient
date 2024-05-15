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
      await refetch();
      setIsOpen(false);
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
      <button
        className="p-2 bg-blue-400 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaRegEdit className="text-xl text-base-100" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative bg-base-100 p-4 top-0 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-end p-3">
              <h1
                onClick={() => setIsOpen(false)}
                className="text-end cursor-pointer"
              >
                <IoIosCloseCircleOutline className="text-3xl font-bold" />
              </h1>
            </div>
            <div className="space-y-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Fade cascade duration={500}>
                  <div>
                    <InpText
                      title={"New Service Name"}
                      id={"serviceName"}
                      name={"serviceName"}
                      register={register}
                    />
                  </div>
                  <div>
                    <InpAny
                      title={"New Price"}
                      type={"number"}
                      name={"price"}
                      id={"servicePrice"}
                      register={register}
                    />
                  </div>
                  <div>
                    <InpText
                      title={"Service Area"}
                      id={"serviceArea"}
                      name={"serviceArea"}
                      register={register}
                    />
                  </div>
                  <div>
                    <InpAny
                      title={"New Service Image"}
                      type={"url"}
                      name={"imgURL"}
                      register={register}
                    />
                  </div>
                  <div>
                    <h1 className="text-xs lg:text-lg font-bold">Description</h1>
                    <textarea
                      className="w-full border bg-base-200 px-3 py-2 rounded"
                      rows={"5"}
                      placeholder="Update Your Service Description Here..."
                      {...register("description", { required: true })}
                    ></textarea>
                  </div>
                </Fade>
              </form>
              <Flip delay={1000}>
                <div>
                  <BtnPrimary
                    title={"Update Service"}
                    onClick={handleSubmit(onSubmit)}
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
  refetch: PropTypes.func.isRequired,
};

export default UpdateModal;
