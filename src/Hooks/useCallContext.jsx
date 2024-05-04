import { useContext } from "react";
import UserContext from "./UserContext";

const useCallContext = () => {
    const data = useContext(UserContext);
    return data
};

export default useCallContext;