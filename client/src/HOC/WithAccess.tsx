import { useSelector } from "react-redux";

//@ts-ignore
const WithAccess = (ProtectedComponent, FallbackComponent) => {
  // создаю HOC для компонентов к которым будут иметь доступ только юрезы с опр. ролями .
  //@ts-ignore
  const { role } = useSelector((store) => store.userReducer.data);
  return (props: any) => {
    const { accessRole } = props;
    if (role === accessRole) {
      return <FallbackComponent />;
    }
    return <ProtectedComponent {...props} />;
  };
};

export default WithAccess;
