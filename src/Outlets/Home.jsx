import { Helmet } from "react-helmet-async";
import Banner from "../Sections/Banner";
import ClientParallax from "../Sections/ClientParalax";
import PopularServices from "../Sections/PopularServices";
import WhyChooseUs from "../Sections/WhyChooseUs";
import Partners from "../Sections/Partners";
import Faq from "../Sections/Faq";
import LatestProjects from "../Sections/LatestProjects";

const Home = () => {
    return (
        <section>
            <Helmet>
                <title>KraftFix | Home</title>
            </Helmet>
            <Banner />
            <WhyChooseUs />
            <PopularServices />
            <ClientParallax />
            <LatestProjects />
            <Faq />
            <Partners />
        </section>
    );
};

export default Home;
