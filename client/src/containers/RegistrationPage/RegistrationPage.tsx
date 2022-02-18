/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from "react-redux";
import BasicForm from "../../components/common/BasicForm/BasicForm";
import { registrationFormColumns } from "../../configs/formsConfigs";
import { REGISTRATION_FORM } from "../../const/consts";
import { userRegistation } from "../../store/actions/userActions";
const RegistrationPage = () => {
  //@ts-ignore
  const { id } = useSelector((store) => store.user.data);
  const dispatch = useDispatch();
  const onButtonClick = (data: any) => {
    console.log("here");
    dispatch(userRegistation(data));
  };
  return (
    <BasicForm
      type={REGISTRATION_FORM}
      inputColumns={registrationFormColumns}
      getColumnsData={onButtonClick}
      userId={id}
    />
  );
};
export default RegistrationPage; /* eslint-disable react-hooks/rules-of-hooks */
