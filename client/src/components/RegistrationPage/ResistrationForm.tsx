/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegistation } from "../../store/actions/userActions";
import InputItem from "../common/Input/InputItem";
import BasicSelect from "../Select/Select";
import { roles } from "../../const/consts";
import { SelectChangeEvent } from "@mui/material";
import { redirect } from "../../helpres/redirect";

const RegistrationForm = () => {
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [role, setRole] = useState("");

  const handleSelectChange = (e: SelectChangeEvent<string>): void => {
    setRole(e.target.value);
  };

  const dispatch = useDispatch();
  const inputColumns = [
    {
      value: email,
      onChangeEvent: setEmail,
      type: "text",
      className: "form-control",
      id: "floatingInput",
      placeholder: "name@example.com",
      label: "enter your e-mail",
    },
    {
      value: name,
      onChangeEvent: setName,
      type: "text",
      className: "form-control",
      id: "floatingInput",
      placeholder: "your first name",
      label: "your first name",
    },
    {
      value: surName,
      onChangeEvent: setSurName,
      type: "text",
      className: "form-control",
      id: "floatingInput",
      placeholder: "your last name",
      label: "your last name",
    },
    {
      onChangeEvent: setPass,
      value: password,
      type: "password",
      className: "form-control",
      id: "floatingPassword",
      placeholder: "Password",
      label: "Password",
    },
  ];
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

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setPass("");
    setEmail("");
    setName("");
    setSurName("");
    dispatch(userRegistation({ email, password, name, surName, role }));
  };
  return (
    <main className='form-signin text-center d-flex justify-content-center col-12'>
      <form className='col-6'>
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>
        {inputColumns.map((column) => {
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
          type='submit'
          onClick={handleFormSubmit}>
          Sign up
        </button>
      </form>
    </main>
  );
};

export default RegistrationForm; /* eslint-disable react-hooks/rules-of-hooks */
