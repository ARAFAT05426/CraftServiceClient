import Lottie from "lottie-react";
import loader from './loader.json'
const Loader = () => {
    return (
        <section className="w-full bg-base-100 min-h-screen flex justify-center">
            <Lottie className="w-1/4 mx-auto" loop={true} animationData={loader} />
        </section>
    );
};

export default Loader;