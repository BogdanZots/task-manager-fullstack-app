/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/actions/userActions";
import InputItem from "../common/Input/InputItem";
import { loginInputColumns } from "../../config/config";
import { ILogin } from "../../interfaces/userInterface/registrationInterface";

const LoginForm = () => {
  const dispatch = useDispatch();

  //@ts-ignore
  let data: ILogin = {};

  const handleChange = (fieldName: string, newValue: any) => {
    data = { ...data, [fieldName]: newValue };
  };
  return (
    <main className="form-signin text-center d-flex justify-content-center mt-5 align-items-center col-12">
      <form className="col-3">
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        {loginInputColumns.map((column) => {
          return (
            <div className="form-floating">
              <InputItem
                onChangeEvent={handleChange}
                type={column.type}
                className={column.className}
                id={column.id}
                placeholder={column.placeholder}
                label={column.label}
                fieldName={column.fieldName}
              />
            </div>
          );
        })}
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(userLogin({ ...data }));
          }}
        >
          Sign in
        </button>
      </form>
    </main>
  );
};

export default LoginForm;
