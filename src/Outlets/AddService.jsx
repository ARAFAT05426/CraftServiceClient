import addService from "/resources/addService.png";
import InpText from "../InputFields/InpText";
import { useForm } from "react-hook-form";
import BtnPrimary from "../Buttons/BtnPrimary";
import InpAny from "../InputFields/InpAny";
import useCallContext from "../Hooks/useCallContext";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Fade, Flip } from "react-awesome-reveal"; // Import the desired animation effect
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useCallContext();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data, e) => {
    const { serviceName, imgURL, serviceArea, price, description } = data;
    const providerName = user?.displayName;
    const providerEmail = user?.email;
    const providerImage = user?.photoURL;

    const serviceData = {
      imgURL,
      serviceName,
      description,
      serviceArea,
      price,
      providerImage,
      providerName,
      providerEmail,
    };
    try {
      await axiosSecure.post("/services", serviceData);
      e.target.reset();
      toast.success("Service Added Successfully", {
        position: "top-center",
        style: {
          backgroundColor: "#007bff",
          color: "white",
        },
      });
    } catch (err) {
      console.error("Error adding service:", err);
      toast.error("Failed to add service", {
        position: "top-center",
        style: {
          backgroundColor: "#dc3545",
          color: "white",
        },
      });
    }
  };
  return (
    <section className="pt-20">
      <Helmet>
        <title>KraftFix | AddServices</title>
      </Helmet>
      <div className="text-center">
        <Fade triggerOnce direction="up" duration={500}>
          <h1 className="text-5xl font-bold">
            Share Your <span className="text-primary">Service</span>
          </h1>
        </Fade>
        <Fade triggerOnce direction="up" delay={600}>
          <p className="max-w-5xl mx-auto font-semibold text-center">
            Here, you can easily share your expertise and offer your services
            to our community. Simply fill out the form with details about your
            service, upload an image, and let others benefit from your skills.
            Join us in building a vibrant platform where individuals can
            connect and access a diverse range of services.
          </p>
        </Fade>
      </div>
      <div className="px-3 lg:px-32 py-16 flex flex-col lg:flex-row items-center gap-5">
        <Fade className="w-1/2" triggerOnce direction="left" delay={800}>
          <div>
            <img className="w-full" src={addService} alt="" />
          </div>
        </Fade>
        <div className="w-full lg:w-1/2 space-y-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="service"
            className="grid grid-cols-2 gap-y-2 gap-x-5 items-center"
          >
            <Fade triggerOnce direction="right" delay={1000}>
              <div>
                <InpText
                  title={"Service Name"}
                  id={"serviceName"}
                  name={"serviceName"}
                  register={register}
                />
              </div>
            </Fade>
            <Fade triggerOnce direction="right" delay={1200}>
              <div>
                <InpAny
                  title={"Price"}
                  type={"number"}
                  name={"price"}
                  id={"servicePrice"}
                  register={register}
                />
              </div>
            </Fade>
            <Fade className="col-span-2" triggerOnce direction="right" delay={1400}>
              <div>
                <InpText
                  title={"Service Area"}
                  id={"serviceArea"}
                  name={"serviceArea"}
                  register={register}
                />
              </div>
            </Fade>
            <Fade className="col-span-2" triggerOnce direction="right" delay={1600}>
              <div>
                <div>
                  <InpAny
                    title={"Service Image"}
                    type={"url"}
                    name={"imgURL"}
                    register={register}
                  />
                </div>
              </div>
            </Fade>
            <Fade className="col-span-2" triggerOnce direction="right" delay={1800}>
              <div>
                <h1 className="text-lg font-bold">Description</h1>
                <textarea
                  className="w-full border bg-base-200 px-5 font-semibold py-3 rounded"
                  rows={"7"}
                  placeholder="Describe Your Service Here..."
                  {...register("description", { required: true })}
                ></textarea>
              </div>
            </Fade>
          </form>
          <Flip triggerOnce direction="horizontal" delay={2000}>
            <div>
              <BtnPrimary title={"Add Service"} form={"service"} cStyle={"w-full"} />
            </div>
          </Flip>
        </div>
      </div>
    </section>
  );
};

export default AddService;
