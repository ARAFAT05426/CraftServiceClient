import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
<<<<<<< HEAD
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
=======
import Error from "../Outlets/Error";
import Home from "../Outlets/Home";
import Contact from "../Outlets/Contact";
import All_Spots from "../Outlets/All_Spots";
import Add_Spots from "../Outlets/Add_Spots";
import SignUp from "../Outlets/SignUp/SignUp";
import LogIn from "../Outlets/LogIn/LogIn";
import Private from "../Outlets/Private";
import SpotDetails from "../Outlets/SpotDetails";
import MyList from "../Outlets/MyList";
import UpdateSpot from "../Outlets/UpdateSpot";
import CountrySpots from "../Outlets/CountrySpots";

>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8
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
<<<<<<< HEAD
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
=======
        path: "/allTouristSpots",
        element: <All_Spots />
      },
      {
        path: "/addSpots",
        element: <Private><Add_Spots /></Private>,
>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
<<<<<<< HEAD
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
=======
        path: '/logIn',
        element: <LogIn />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/spotdetails/:id',
        element: <Private><SpotDetails/></Private>,
        loader: ({params}) => fetch(`https://assignment-10-plum.vercel.app/spots/${params.id}`)
      },
      {
        path: '/myList',
        element: <Private><MyList /></Private>
      },
      {
        path: '/updateSpot/:id',
        element: <Private><UpdateSpot /></Private>,
        loader: ({params}) => fetch(`https://assignment-10-plum.vercel.app/spots/${params.id}`)
      },
      {
        path: '/coutrySpot/:name',
        element: <CountrySpots/>,
        loader: ({params}) => fetch(`https://assignment-10-plum.vercel.app/coutrySpot/${params.name}`)
      }
>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8
    ],
  },
]);
export default routes;
