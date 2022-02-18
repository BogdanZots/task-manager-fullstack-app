/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegistation } from "../../store/actions/userActions";
import InputItem from "../common/Input/InputItem";
import BasicSelect from "../Select/Select";
import { roles } from "../../const/consts";
import { SelectChangeEvent } from "@mui/material";
import { redirect } from "../../helpres/redirect";

const RegistrationForm = ({ inputColumns, getColumnsData, userId }: any) => {
  console.log("RE render in registration");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [role, setRole] = useState("");

  const handleSelectChange = (e: SelectChangeEvent<string>): void => {
    setRole(e.target.value);
  };

  const callbacks = [setEmail, setName, setSurName, setPass, setRole];
  const values = [email, name, surName, password, role];
  const inputColumnsCopy = inputColumns.map((fieldsObj: any) => ({
    ...fieldsObj,
  }));
  const changedInputColumns = inputColumnsCopy.map(
    (fieldsObj: any, i: number) => {
      return {
        ...fieldsObj,
        onChangeEvent: callbacks[i],
        value: values[i],
      };
    }
  );
  
  const selectColumns = [
    {
      labelId: "demo-simple-select-label",
      id: "demo-simple-select",
      value: role,
      onChange: handleSelectChange,
      label: "Select person role",
      options: [
        {
          value: roles.adminRole.ROLE_NAME,
          title: roles.adminRole.ROLE_TITLE,
        },
        {
          value: roles.userRole.ROLE_NAME,
          title: roles.userRole.ROLE_TITLE,
        },
      ],
    },
  ];

  const handleButtonClick = () => {
    setPass("");
    setEmail("");
    setName("");
    setSurName("");
    setRole("");
    const handleUserRegistration = getColumnsData({
      email,
      password,
      name,
      surName,
      role,
    });
    return handleUserRegistration();
  };

  return (
    <main className='form-signin text-center d-flex justify-content-center col-12'>
      <div className='col-6'>
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>
        {changedInputColumns.map((column: any) => {
          return (
            <InputItem
              onChangeEvent={column.onChangeEvent}
              value={column.value}
              type={column.type}
              className={column.className}
              id={column.id}
              placeholder={column.placeholder}
              label={column.label}
            />
          );
        })}

        <BasicSelect columns={selectColumns} title='Select person role' />
        <button
          className='w-100 btn btn-lg btn-primary'
          onClick={handleButtonClick}>
          Sign up
        </button>
      </div>
    </main>
  );
};

export default RegistrationForm; /* eslint-disable react-hooks/rules-of-hooks */
