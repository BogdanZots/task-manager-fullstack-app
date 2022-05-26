import { CREATE_ITEM_FORM, REGISTRATION_FORM } from "../../../const/consts";
import InputItem from "../Input/InputItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setRemindsItemRequest } from "../../../store/actions/remindsAction";
import {
  createItemColumns,
  registrationInputColumns,
} from "../../../config/config";
import { useState, useCallback } from "react";
import { isEveryFalse } from "../../../helpres/isEveryFalse";
import RegistrationPage from "../../../containers/RegistrationPage/RegistrationPage";

/* interface IBasicFormProps {
  type: string;
  fields: any[];
} */

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
  };
  //@ts-ignore
  const renderBasicForm = (type /* : string */) /* : JSX.Element */ => {
    switch (type) {
      case CREATE_ITEM_FORM:
        return (
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
        );
      case REGISTRATION_FORM: {
        return <RegistrationPage />;
      }
      default:
        <div>There is no data to display</div>;
    }
  };
  return <div>{renderBasicForm(type)}</div>;
}