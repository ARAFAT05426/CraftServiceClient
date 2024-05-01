import Lottie from "lottie-react";
import errAnime from "./errorAnime.json";
import { Link, useNavigate } from "react-router-dom";
import Btn_Illuminate from "../../Buttons/Btn_Illuminate";
const Error = () => {
  const naviagate = useNavigate();
  return (
    <section className="min-h-screen overflow-hidden flex flex-col items-center">
      <Lottie className="w-full h-[50vh] mx-auto" animationData={errAnime} />
      <div className="flex flex-col items-center text-center space-y-3">
        <h1 className="text-3xl lg:text-5xl font-bold text-wrap text-center">
          Sorry, we couldn`t find this page.
        </h1>
        <p className="text-xl fonse">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <div className="px-5 py-3 flex justify-around items-center w-1/2">
          <button onClick={() => naviagate(-1)} className="px-7 py-4 font-semibold border-2 border-t-transparent border-l-transparent text-black border-black">
            Go back
          </button>
          <Link to={"/"}>
            <Btn_Illuminate text={"Homepage"} cStyle={'text-black hover:text-white'} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
