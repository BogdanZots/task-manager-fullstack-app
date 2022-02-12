import React, { useState } from "react";
import { CREATE_ITEM_FORM } from "../../../const/consts";
import InputItem from "../../common/Input/InputItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setRemindsItemRequest } from "../../../store/actions/remindsAction";
interface IBasicFormProps {
  type: string;
  fields: any[];
}

export default function BasicForm({ type, fields }: IBasicFormProps) {
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e: any) => {
    const type = e.target.name;
    switch (type) {
      case "title":
        return setInputState({
          ...inputState,
          [e.target.name]: e.target.value,
        });
      case "description":
        return setInputState({
          ...inputState,
          [e.target.name]: e.target.value,
        });
      default:
        return console.warn(`No case for event type "${type}"`);
    }
  };
  const handleSaveItem = () => {
    if (!inputState.title || !inputState.description) return;
    dispatch(
      setRemindsItemRequest({
        title: inputState.title,
        description: inputState.description,
      })
    );
  };
  //@ts-ignore
  const renderBasicForm = (type: string): JSX.Element => {
    switch (type) {
      case CREATE_ITEM_FORM:
        return (
          <Box>
            {fields.map((inputField: any, i) => {
              return (
                <InputItem
                  type={inputField.type}
                  placeholder={inputField.description}
                  value={inputState}
                  onChangeEvent={handleChange}
                  label={inputField.label}
                  name={inputField.name}
                />
              );
            })}
            <Button onClick={handleSaveItem}>Save item</Button>
          </Box>
        );
      default:
        <div>There is no data to display</div>;
    }
  };
  return <div>{renderBasicForm(type)}</div>;
}
