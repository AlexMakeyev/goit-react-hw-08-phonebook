import { useSelector } from "react-redux";

import { isLogin } from '../../redux/auth/authSelector'

const useAuth = () => {
    const result = useSelector(isLogin);

    return result;
}

export default useAuth;