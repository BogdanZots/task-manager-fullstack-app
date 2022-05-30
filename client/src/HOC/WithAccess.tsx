import { useSelector } from "react-redux";
import { getUser } from "../store/selectors/userSelector";

//@ts-ignore
const WithAccess = (ProtectedComponent, FallbackComponent) => {
  // создаю HOC для компонентов к которым будут иметь доступ только юрезы с опр. ролями .
  //@ts-ignore
  const {
    data: { role },
  } = useSelector(getUser);
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
