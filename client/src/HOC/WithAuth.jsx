import { useSelector } from "react-redux";
import { getUserAuthState, getUserData } from "../store/selectors/userSelector";

const WithAuth = (ProtectedComponent, FallbackComponent) => {
  // создаю HOC для компонентов которым нужна инфа авт. ли пользователь
  const isAuth = useSelector(getUserAuthState);
  return (props) => {
    if (!isAuth) {
      return <FallbackComponent />;
    }
    return <ProtectedComponent {...props} />;
  };
};

export default WithAuth;
