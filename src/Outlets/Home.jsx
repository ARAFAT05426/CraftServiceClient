<<<<<<< HEAD
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
=======
import Banner from "../Sections/Banner";
import Country from "../Sections/Country";
import NewsLetter from "../Sections/NewsLetter";
import Testimonials from "../Sections/Testimonials";
import TouristSpots from "../Sections/TouristSpots";
import Blogs from "../Sections/Blogs"
const Home = () => {
  return (
    <section className="">
      <Banner />
      <TouristSpots />
      <Testimonials />
      <Country />
      <Blogs />
      <NewsLetter />
    </section>
  );
>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8
};

export default Home;
