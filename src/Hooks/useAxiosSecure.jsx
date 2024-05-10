import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API, // Ensure this points to your API base URL
  withCredentials: true,
});

const useAxiosSecure = (signOutUser) => { // Inject signOutUser dependency
  const navigate = useNavigate();

  axiosSecure.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log("Error from axios interceptor:", error.response);
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        signOutUser(); // Call signOutUser passed from outside
        navigate("/login"); // Navigate to the login page
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
