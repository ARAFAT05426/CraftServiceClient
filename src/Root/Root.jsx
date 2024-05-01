import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";

const Root = () => {
    return (
        <main>
            <Navbar />
            <section className="custom-min-height">
            <Outlet/>
            </section>
        </main>
    );
};

export default Root;