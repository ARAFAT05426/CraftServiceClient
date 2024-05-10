import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Footer from "../Sections/Footer";
import { Toaster } from 'react-hot-toast';
const Root = () => {
    return (
        <main className="text-text font-common">
            <Toaster />
            <Navbar />
            <section className="min-h-nav_h_minus">
            <Outlet/>
            </section>
            <Footer />
        </main>
    );
};

export default Root;