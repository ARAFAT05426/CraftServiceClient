import PropTypes from "prop-types";
import useCallContext from "../Hooks/useCallContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "./Loader/Loader";
const Private = ({ children }) => {
  const { user, loading } = useCallContext();
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return (
      <Navigate to={"/logIn"} state={location?.pathname || "/"}></Navigate>
    );
  }
  return <section>{children}</section>;
};
Private.propTypes = {
  children: PropTypes.node,
};
export default Private;
