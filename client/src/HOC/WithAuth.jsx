import { useSelector } from "react-redux";  

const WithAuth = (ProtectedComponent, FallbackComponent) => { // создаю HOC для компонентов которым нажна инфа авт. ли пользователь
  const isAuth = useSelector((store) => store.userReducer.isAuth); 
  const redirect = !isAuth;
  return (props) => {
    if (redirect) {
      return <FallbackComponent />;
    }
    return <ProtectedComponent {...props} />;
  };
};

export default WithAuth;
