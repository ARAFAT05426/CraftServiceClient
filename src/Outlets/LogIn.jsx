import { Fade } from "react-awesome-reveal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import BtnPrimary from "../Buttons/BtnPrimary";
import InpPassword from "../InputFields/InpPassword";
import InpEmail from "../InputFields/InpEmail";
import useCallContext from "../Hooks/useCallContext";
import toast from "react-hot-toast";
import { useEffect } from "react";
const LogIn = () => {
  const img = "https://source.unsplash.com/featured/1080x720/?exotic";
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation()
  const { user, signUser, loading, signUserWithGoogle } = useCallContext();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const onSubmit = (data, e) => {
    const { email, pass } = data;
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(pass)) {
      return toast.error(
        "Password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long",
        {
          position: "top-center",
          style: {
            backgroundColor: "#dc3545",
            color: "white",
            fontSize: "13px",
          },
        }
      );
    }
    signUser(email, pass)
      .then(() => {
        e.target.reset();
        navigate(location?.state || "/");
        toast.success("Welcome To KraftFix", {
          position: "top-center",
          style: {
            backgroundColor: "#007bff",
            color: "white",
          },
        });
      })
      .catch((err) => {
        console.log(err);
        const errorMessage =
          err.message || "An error occurred. Please try again."; // Default error message
        toast.error(errorMessage, {
          position: "top-center",
          style: {
            backgroundColor: "#dc3545", // Red color for error
            color: "white",
          },
        });
      });
  };

  const handleSocialSignIn = async (method) => {
    try {
      await method();
      toast.success("Welcome To KraftFix", {
        position: "top-center",
        style: {
          backgroundColor: "#007bff",
          color: "white",
        },
      })
      navigate(location?.state || "/");
    } catch (error) {
      console.error("Error during social sign-in or token request:", error);
      toast.error("An error occurred. Please try again.");
    }
  };
  
  if (user || loading) {
    return;
  }
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
              <BtnPrimary title={"Log In"} cStyle={" w-full"} form={"logIn"} />
            </Fade>
            <Fade direction="up" triggerOnce delay={1100}>
              <div className="text-center">
                <p className="font-semibold cursor-pointer transition-all">
                  New Here?
                  <Link
                    to={"/signUp"}
                    state={location.state}
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
                <span
                  onClick={() => handleSocialSignIn(signUserWithGoogle)}
                  className="px-5 py-3 h-14 bg-white rounded-md flex items-center cursor-pointer gap-2 justify-center w-2/5 text-nowrap text-xl font-bold text-black"
                >
                  <img
                    className="w-[12%]"
                    src="/resources/googleIcon.png"
                    alt=""
                  />
                  Continue With Google
                </span>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
