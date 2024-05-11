import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react"; // Import useEffect hook
import Navbar from "../Navigation/Navbar";
import Footer from "../Sections/Footer";
import { Toaster } from 'react-hot-toast';

const Root = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
