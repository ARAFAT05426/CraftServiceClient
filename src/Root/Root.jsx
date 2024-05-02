import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Footer from "../Sections/Footer";

const Root = () => {
    return (
        <main>
            <Navbar />
            <section className="min-h-nav_h_minus">
            <Outlet/>
            </section>
            <Footer />
        </main>
    );
};

export default Root;