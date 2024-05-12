import useCallContext from "../Hooks/useCallContext";
import useRefetch from "../Hooks/useRefetch";

const BookedServices = () => {
    const {user} = useCallContext()
    const {data} = useRefetch(`/bookings/${user?.email}`);
    console.log(data);
    return (
        <section className="pt-20">
            <h1>i am Booking</h1>
        </section>
    );
};

export default BookedServices;