import addService from "/resources/addService.png";
import InpText from "../InputFields/InpText";
import { useForm } from "react-hook-form";
import BtnPrimary from "../Buttons/BtnPrimary";
import InpAny from "../InputFields/InpAny";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("data:", data);
  };

  return (
    <section className="pt-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Share Your <span className="text-primary">Service</span>
        </h1>
        <p className="max-w-5xl mx-auto font-semibold text-center">
          Here, you can easily share your expertise and offer your services to
          our community. Simply fill out the form with details about your
          service, upload an image, and let others benefit from your skills.
          Join us in building a vibrant platform where individuals can connect
          and access a diverse range of services.
        </p>
      </div>
      <div className="px-3 lg:px-32 py-16 flex flex-col lg:flex-row items-center gap-5">
        <div className="w-1/2 ">
          <img className="w-full" src={addService} alt="" />
        </div>
        <div className="w-full lg:w-1/2 space-y-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="service"
            className="grid grid-cols-2 gap-y-2 gap-x-5 items-center"
          >
            <div>
              <InpText
                title={"Service Name"}
                id={"serviceName"}
                name={"serviceName"}
                register={register}
              />
            </div>
            <div>
              <InpAny
                title={"Price"}
                type={"number"}
                name={"servicePrice"}
                id={"servicePrice"}
                register={register}
              />
            </div>
            <div className="col-span-2">
              <InpText
                title={"Service Area"}
                id={"serviceArea"}
                name={"serviceArea"}
                register={register}
              />
            </div>
            <div className="col-span-2">
              <div>
                <InpAny
                  title={"Service Image"}
                  type={"url"}
                  name={"serviceImage"}
                  register={register}
                />
              </div>
            </div>
            <div className="col-span-2">
              <h1 className="text-lg font-bold">Description</h1>
              <textarea
                className="w-full border bg-base-200 px-5 font-semibold py-3 rounded"
                rows={"7"}
                placeholder="Describe Your Service Here..."
                {...register("description", { required: true })}
              ></textarea>
            </div>
          </form>
          <div>
            <BtnPrimary
              title={"Add Service"}
              form={"service"}
              cStyle={"w-full"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
