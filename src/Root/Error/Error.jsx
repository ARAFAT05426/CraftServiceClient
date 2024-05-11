import Lottie from "lottie-react";
import errAnime from "./errorAnime.json";
import { Link, useNavigate } from "react-router-dom";
import BtnPrimary from "../../Buttons/BtnPrimary";
import { Fade } from "react-awesome-reveal";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen overflow-hidden flex flex-col items-center">
      <Lottie className="w-full h-[70vh] mx-auto" animationData={errAnime} />
      <div className="flex flex-col items-center text-center space-y-3 -mt-52 px-5 lg:px-16">
        <Fade
          direction="left"
          duration={600}
          className="text-3xl lg:text-5xl font-bold text-wrap text-center"
        >
          Sorry, we couldn`t find this page.
        </Fade>
        <Fade direction="left" delay={500}>
          <p className="text-xl font-semibold">
            But don`t worry, you can find plenty of other things on our
            homepage.{" "}
          </p>
        </Fade>
        <div className="px-5 py-3 flex items-center z-10 gap-3">
          <Fade direction="left" delay={600}>
            <button
              onClick={() => navigate(-1)}
              className="px-5 lg:px-7 bg-transparent py-3 font-semibold border-2 border-t-transparent border-l-transparent text-black border-black"
            >
              Go back
            </button>
          </Fade>
          <Fade direction="left" delay={800}>
            <Link to={"/"}>
              <BtnPrimary
                title={"Back To Homepage"}
                cStyle={"text-black hover:text-white"}
              />
            </Link>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Error;
