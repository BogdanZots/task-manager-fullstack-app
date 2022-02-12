import React from "react";
import Button from "../Button/Button";
import Input from "../Input/InputItem";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function TextForm({
  buttonText,
  buttonClickEvent,
  InputEmailText,
  InputPasswordText,
}) {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const handleEmailChange = (e) => {
    setEmailState(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordState(e.target.value);
  };
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        text={buttonText}
        handleButtonClick={() => {
          console.log("click button", buttonClickEvent);
          dispatch(
            buttonClickEvent({ email: emailState, password: passwordState })
          );
        }}
      />
      <Input
        type='text'
        onChangeEvent={(e) => {
          handleEmailChange(e);
        }}
        value={emailState}
        placeholder={InputEmailText}
      />
      <Input
        type='text'
        onChangeEvent={(e) => {
          handlePasswordChange(e);
        }}
        value={passwordState}
        placeholder={InputPasswordText}
      />
    </div>
  );
}
