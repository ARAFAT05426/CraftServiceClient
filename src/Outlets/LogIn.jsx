import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import BtnPrimary from "../Buttons/BtnPrimary";
import InpPassword from "../InputFields/InpPassword";
import InpEmail from "../InputFields/InpEmail";

const LogIn = () => {
  const img = "https://source.unsplash.com/featured/1080x720/?exotic";
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleSocialSignIn = (method) => {
    method()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err);
      });
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
            className="bg-no-repeat bg-cover bg-center hidden md:flex lg:flex flex-col items-center justify-center rounded-s-lg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${img})`,
            }}
          >
            <Fade direction="up">
              <img className="w-1/5 mx-auto" src="/resources/logo.png" alt="" />
            </Fade>
            <Fade direction="up" triggerOnce delay={300}>
              <p className="font-semibold max-w-lg text-center text-white">
                Please enter your details to sign up and be part of our great
                community.
              </p>
            </Fade>
          </div>
          <div className="bg-white/35 backdrop-blur-md flex flex-col justify-center py-20 px-7 space-y-4 rounded-s-lg lg:rounded-s-none rounded-e-lg">
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="logIn"
              className="space-y-3"
            >
              <Fade direction="up" triggerOnce delay={500}>
                <InpEmail register={register} />
              </Fade>
              <Fade direction="up" triggerOnce delay={700}>
                <InpPassword register={register} />
              </Fade>
            </form>
            <Fade direction="up" triggerOnce delay={900}>
              <BtnPrimary
                title={"Log In"}
                cStyle={" w-full"}
                form={"logIn"}
              />
            </Fade>
            <Fade direction="up" triggerOnce delay={1100}>
              <div className="text-center">
                <p className="font-semibold cursor-pointer transition-all">
                  New Here?
                  <Link
                    to={"/signUp"}
                    className="text-blue-800 hover:underline ml-3"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={1300}>
              <div className="flex items-center gap-3">
                <hr className="border-base-content border-b w-full" />
                <span className="font-bold text-xl">Or</span>
                <hr className="border-base-content border-b w-full" />
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={1500}>
              <div className="flex flex-col lg:flex-row items-center justify-around space-y-3 lg:space-y-0">
                <button onClick={() =>handleSocialSignIn()} className="px-5 py-3 h-14 bg-white rounded-md flex items-center gap-2 justify-center w-4/5 lg:w-2/5 text-nowrap font-bold text-black">
                  <img
                    className="w-[11%]"
                    src="/resources/googleIcon.png"
                    alt=""
                  />
                  Log In With Google
                </button>
                <button onClick={() =>handleSocialSignIn()} className="px-5 py-3 h-14 bg-black rounded-md flex items-center gap-2 justify-center w-4/5 lg:w-2/5 text-nowrap font-bold text-white">
                  <FaGithub className="text-4xl" />
                  Log In With Github
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
