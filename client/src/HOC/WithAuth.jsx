import { useSelector } from "react-redux";

const WithAuth = (ProtectedComponent, FallbackComponent) => {
  // создаю HOC для компонентов которым нужна инфа авт. ли пользователь
  const isAuth = useSelector((store) => store.user.isAuth);
  return (props) => {
    if (!isAuth) {
      return <FallbackComponent />;
    }
    return <ProtectedComponent {...props} />;
  };
};

export default WithAuth;
