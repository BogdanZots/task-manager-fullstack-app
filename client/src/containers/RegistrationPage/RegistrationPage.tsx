/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from "react-redux";
import BasicForm from "../../components/common/Forms/BasicForm/BasicForm";
import { registrationFormColumns } from "../../configs/formsConfigs";
import { REGISTRATION_FORM } from "../../const/consts";
import { userRegistation } from "../../store/actions/userActions";
import { getUser } from "../../store/selectors/userSelector";
const RegistrationPage = () => {
  //@ts-ignore
  const {
    data: { id },
  } = useSelector(getUser);
  const dispatch = useDispatch();
  const onButtonClick = (data: any) => {
    console.log("here");
    dispatch(userRegistation(data));
  };
  console.log("registration");
  return (
    <BasicForm
      type={REGISTRATION_FORM}
      //@ts-ignore
      inputColumns={registrationFormColumns}
      getColumnsData={onButtonClick}
      userId={id}
    />
  );
};
export default RegistrationPage; /* eslint-disable react-hooks/rules-of-hooks */
