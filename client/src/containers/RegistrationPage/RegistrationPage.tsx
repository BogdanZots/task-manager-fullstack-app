import { useSelector } from "react-redux";
import BasicForm from "../../components/common/Forms/BasicForm/BasicForm";
import { REGISTRATION_FORM } from "../../const/consts";
import { userRegistation } from "../../store/actions/userActions";
import { getUser } from "../../store/selectors/userSelector";
const RegistrationPage = () => {
  const {
    data: { id },
  } = useSelector(getUser);
  return (
    <BasicForm
      type={REGISTRATION_FORM}
      submitForm={userRegistation}
      userId={id}
    />
  );
};
export default RegistrationPage; 
