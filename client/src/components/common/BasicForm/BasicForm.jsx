import React, { useState } from "react";
import { CREATE_ITEM_FORM } from "../../../const/consts";
import InputItem from "../Input/InputItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setRemindsItemRequest } from "../../../store/actions/remindsAction";
/* interface IBasicFormProps {
  type: string;
  fields: any[];
} */

export default function BasicForm({ type, userId } /* : IBasicFormProps */) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const inputColumns = [
    {
      value: title,
      handleInputChange: setTitle,
      type: "text",
      className: "form-control",
      id: "floatingInput",
      placeholder: "name@example.com",
      label: "Enter title",
    },
    {
      value: description,
      handleInputChange: setDescription,
      type: "text",
      className: "form-control",
      id: "floatingInput",
      placeholder: "your first name",
      label: "Enter description ",
    },
  ];

  const handleSaveItem = () => {
    if (!title || !description) return;
    dispatch(
      setRemindsItemRequest({
        title,
        description,
        userId,
      })
    );
  };
  //@ts-ignore
  const renderBasicForm = (type /* : string */) /* : JSX.Element */ => {
    switch (type) {
      case CREATE_ITEM_FORM:
        return (
          <Box>
            {inputColumns.map((column /* : any */, i) => {
              return (
                <InputItem
                  type={column.type}
                  placeholder={column.description}
                  value={column.value}
                  onChangeEvent={column.handleInputChange}
                  label={column.label}
                  name={column.name}
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
