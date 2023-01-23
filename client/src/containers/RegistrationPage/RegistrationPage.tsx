import { useSelector } from "react-redux";
import { getUser } from "../../store/selectors/userSelector";
import { userRegistation } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";
import { REGISTRATION_FORM } from "../../const/consts";
import BasicForm from "../../components/common/Forms/BasicForm";
const RegistrationPage = () => {
  const {
    data: { id },
  } = useSelector(getUser);

  const dispatch = useDispatch();
  const handleUserRegistration = (data: any) => {
    dispatch(userRegistation(data));
  };
  return <BasicForm type={REGISTRATION_FORM} onSubmit={handleUserRegistration} userId={id} />;
};
export default RegistrationPage;
