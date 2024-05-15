import { Helmet } from "react-helmet-async";
import Banner from "../Sections/Banner";
import ClientParalax from "../Sections/ClientParalax";
import PopularServices from "../Sections/PopularServices";
import WhyChooseUs from "../Sections/WhyChooseUs";
import Partners from "../Sections/Partners";
import Faq from "../Sections/Faq";

const Home = () => {
    return (
        <section className="">
            <Helmet>
                <title>KraftFix | Home</title>
            </Helmet>
            <Banner/>
            <WhyChooseUs />
            <PopularServices />
            <ClientParalax />
            <Faq />
            <Partners />
        </section>
    );
};

export default Home;
