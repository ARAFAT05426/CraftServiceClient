import Lottie from "lottie-react";
import loadAnimation from './loadAnimation.json'
const Loader = () => {
    return (
        <section className="w-full bg-base-100 dark:bg-base-100">
            <Lottie className="w-3/4 mx-auto" loop={true} animationData={loadAnimation} />
        </section>
    );
};

export default Loader;