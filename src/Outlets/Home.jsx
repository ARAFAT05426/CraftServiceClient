import Banner from "../Sections/Banner";
import ClientParalax from "../Sections/ClientParalax";
import PopularServices from "../Sections/PopularServices";

 const Home = () => {
    return (
        <section className="h-[700vh]">
            <Banner/>
            <PopularServices />
            <ClientParalax />
        </section>
    );
};

export default Home;