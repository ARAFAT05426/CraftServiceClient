import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <section className="pt-20">
            <h2>i am Service Details</h2>
        </section>
    );
};

export default ServiceDetails;