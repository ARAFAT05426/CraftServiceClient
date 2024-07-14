import { useContext } from "react";
<<<<<<< HEAD
import UserContext from "./UserContext";

const useCallContext = () => {
    const data = useContext(UserContext);
    return data
=======
import authContext from "./authContext";

const useCallContext = () => {
    const datas = useContext(authContext);
    return datas
>>>>>>> 72ce20db5515d37913fd439385769b38cf6f14f8
};

export default useCallContext;