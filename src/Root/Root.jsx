<<<<<<< HEAD
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
      <section className=" min-h-[calc(100vh-64)]">
        <Outlet/>
=======
import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import Footer from "../Sections/Footer";

const Root = () => {
  return (
    <main>
      <section className="h-16">
        <Navbar />
      </section>
      <section className="min-h-[100vh-64px]">
        <Outlet />
>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8
      </section>
      <Footer />
    </main>
  );
};

export default Root;
