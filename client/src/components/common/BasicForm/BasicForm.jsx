<<<<<<< HEAD
import { CREATE_ITEM_FORM } from "../../../const/consts";
import InputItem from "../Input/InputItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setRemindsItemRequest } from "../../../store/actions/remindsAction";
import { createItemColumns } from "../../../config/config";
import { useState, useCallback } from "react";
import { isEveryFalse } from "../../../helpres/isEveryFalse";
=======
import { CREATE_FORM, REGISTRATION_FORM } from "../../../const/consts";
import Box from "@mui/material/Box";
import CreateItemForm from "./Forms/CreateItemForm";
import RegistrationForm from "../../RegistrationPage/ResistrationForm";
>>>>>>> develop
/* interface IBasicFormProps {
  type: string;
  fields: any[];
} */

<<<<<<< HEAD
let data = {};
let isFalse = true;

export default function BasicForm({ type, userId } /* : IBasicFormProps */) {
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = useCallback((fieldName, newValue) => {
    data = { ...data, [fieldName]: newValue };
    isFalse = isEveryFalse(data, createItemColumns.length);
    if (!isFalse) {
      setButtonDisabled(false);
    } else if (isFalse) {
      setButtonDisabled(true);
    }
  }, []);

  console.log(data);

  const handleSaveItem = () => {
    dispatch(
      setRemindsItemRequest({
        ...data,
        userId,
      })
    );
=======
export default function BasicForm(
  { type, userId, getColumnsData, inputColumns } /* : IBasicFormProps */
) {
  console.log("re render");

  const handleButtonClick = /* React.useCallback( */ (data) => {
    console.log("ALARM", data);
    return () => {
      return getColumnsData(data);
    };
>>>>>>> develop
  };
  /*  }, []) */ //@ts-ignore
  const renderBasicForm = (type /* : string */) /* : JSX.Element */ => {
    switch (type) {
      case CREATE_FORM:
        return (
<<<<<<< HEAD
          <Box>
            {createItemColumns.map((column /* : any */, i) => {
              return (
                <InputItem
                  type={column.type}
                  placeholder={column.description}
                  onChangeEvent={handleChange}
                  label={column.label}
                  name={column.name}
                  fieldName={column.fieldName}
                />
              );
            })}
            <Button disabled={buttonDisabled} onClick={handleSaveItem}>
              Save
            </Button>
          </Box>
=======
          <CreateItemForm
            getColumnsData={handleButtonClick}
            inputColumns={inputColumns}
            userId={userId}
          />
        );
      case REGISTRATION_FORM:
        return (
          <RegistrationForm
            inputColumns={inputColumns}
            getColumnsData={handleButtonClick}
            userId={userId}
          />
>>>>>>> develop
        );
      default:
        <div>There is no data to display</div>;
    }
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>{renderBasicForm(type)}</Box>
  );
}
