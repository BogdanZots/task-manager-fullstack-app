/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch } from "react-redux";
import { userRegistation } from "../../store/actions/userActions";
import InputItem from "../common/Input/InputItem";
import BasicSelect from "../Select/Select";
import {
  registrationInputColumns,
  selectRoleColumns,
} from "../../config/config";
import { IRegistration } from "../../interfaces/userInterface/registrationInterface";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  let data : IRegistration = {};

  const handleChange = (fieldName: string, newValue: any) => {
    data = { ...data, [fieldName]: newValue };
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    dispatch(userRegistation({ ...data }));
  };
  return (
    <main className='form-signin text-center d-flex justify-content-center col-12'>
      <form className='col-6'>
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>
        {registrationInputColumns.map((column) => {
          return (
            <InputItem
              onChangeEvent={handleChange}
              type={column.type}
              className={column.className}
              id={column.id}
              placeholder={column.placeholder}
              label={column.label}
              fieldName={column.fieldName}
            />
          );
        })}

        <BasicSelect
          onChangeEvent={handleChange}
          columns={selectRoleColumns}
          title='Select person role'
        />
        <button
          className='w-100 btn btn-lg btn-primary'
          type='submit'
          onClick={handleFormSubmit}>
          Sign up
        </button>
      </form>
    </main>
  );
};

export default RegistrationForm; /* eslint-disable react-hooks/rules-of-hooks */
