import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import BtnPrimary from "../Buttons/BtnPrimary";
import InpText from "../InputFields/InpText";
import InpPassword from "../InputFields/InpPassword";
import InpEmail from "../InputFields/InpEmail";

const SignUp = () => {
  const img = "https://source.unsplash.com/featured/1080x720/?exotic";
  
  const { register, handleSubmit , formState: { errors } } = useForm();
  const onSubmit = (data) =>{
    const { pass } = data;
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(pass)) {
      return console.log("passValue error");
    }
  };
  
  return (
    <section className="pt-20">
      <div
        className="bg-cover bg-no-repeat bg-center py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`,
        }}
      >
        <div className="px-5 lg:px-28 py-10 lg:py-20 rounded-sm grid grid-cols-1 lg:grid-cols-2 min-h-nav_h_minus">
          <div
            className="bg-no-repeat bg-cover bg-center hidden md:flex lg:flex flex-col items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${img})`,
            }}
          >
            <Fade direction="up">
              <img className="w-1/5 mx-auto" src="/resources/logo.png" alt="" />
            </Fade>
            <Fade direction="up" delay={300}>
              <p className="font-semibold max-w-lg text-center text-white">
                Please enter your details to sign up and be part of our great community.
              </p>
            </Fade>
          </div>
          <div className="bg-white/35 backdrop-blur-md flex flex-col justify-center py-20 px-7 space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} id="signUp" className="space-y-3">
              {/* Name Input */}
              <Fade direction="up" delay={500}>
                <InpText title={"Name"} hColor={"text-white"} name={"name"} register={register} />
              </Fade>
              {/* Email Input */}
              <Fade direction="up" delay={700}>
                <InpEmail register={register} />
              </Fade>
              {/* PassWord Input */}
              <Fade direction="up" delay={900}>
                <InpPassword register={register} errors={errors} />
              </Fade>
            </form>
            <Fade direction="up" delay={1100}>
              <BtnPrimary title={"Sign Up"} cStyle={"text-black hover:text-white w-full"} form={"signUp"} />
            </Fade>
            <Fade direction="up" delay={1400}>
              <div className="text-center">
                <p className="font-semibold cursor-pointer transition-all">
                  Already have an account?
                  <Link to={"/logIn"} className="text-blue-800 hover:underline ml-3">
                    Log In
                  </Link>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
