import Banner from "../Sections/Banner";
import ClientParalax from "../Sections/ClientParalax";
import PopularServices from "../Sections/PopularServices";
import WhyChooseUs from "../Sections/WhyChooseUs";

 const Home = () => {
    return (
        <section className="h-[700vh]">
            <Banner/>
            <PopularServices />
            <ClientParalax />
            <WhyChooseUs />
        </section>
    );
};

export default Home;