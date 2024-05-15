import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Outlets/Home";
import About from "../Outlets/About";
import Contact from "../Outlets/Contact";
import Error from "./Error/Error";
import SignUp from "../Outlets/SignUp";
import LogIn from "../Outlets/LogIn";
import Services from "../Outlets/Services";
import Private from "./Private";
import AddService from "../Outlets/AddService";
import ManageService from "../Outlets/ManageService";
import ServiceToDo from "../Outlets/ServiceToDo";
import ServiceDetails from "../Outlets/ServiceDetails";
import BookedServices from "../Outlets/BookedServices";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/bookedServices",
        element: (
          <Private>
            <BookedServices />
          </Private>
        ),
      },
      {
        path: "/addService",
        element: (
          <Private>
            <AddService />
          </Private>
        ),
      },
      {
        path: "/manageService",
        element: (
          <Private>
            <ManageService />
          </Private>
        ),
      },
      {
        path: "/servicesToDo",
        element: (
          <Private>
            <ServiceToDo />
          </Private>
        ),
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <Private>
            <ServiceDetails />
          </Private>
        ),
        loader: async ({ params }) =>
          await fetch(`${import.meta.env.VITE_API}/services/${params.id}`),
      },
    ],
  },
]);
export default routes;
