import { useSelector } from "react-redux";

//@ts-ignore
const WithAccess = (ProtectedComponent, FallbackComponent) => {
  console.log("test");
  // создаю HOC для компонентов к которым будут иметь доступ только юрезы с опр. ролями .
  //@ts-ignore
  const { role } = useSelector((store) => store.user.data);
  return (props: any) => {
    const { accessRole } = props;
    console.log(role, accessRole);
    if (role !== accessRole || !role || !accessRole) {
      return <FallbackComponent />;
    }
    return <ProtectedComponent {...props} />;
  };
};

export default WithAccess;
