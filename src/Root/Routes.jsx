import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Outlets/Home";
import About from "../Outlets/About";
import Contact from "../Outlets/Contact";
import Error from "./Error/Error";
import Form from "../Outlets/Form";
import SignUp from "../Outlets/SignUp";
import LogIn from "../Outlets/LogIn";
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
    ],
  },
]);
export default routes;
