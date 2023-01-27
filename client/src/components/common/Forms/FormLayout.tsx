import { useState, useRef, useEffect } from "react";
import { CREATE_ITEM_FORM, REGISTRATION_FORM } from "../../../const/const";
import { registrationInputColumns, createItemColumns } from "../../../config/config";
import { isItemEmpty } from "../../../helpres/isItemEmpty";
import { CreateItemForm } from "./CreateItemForm";
import RegistrationForm from "./RegistrationForm";
import { Box } from "@mui/material";

interface BasicFormProps {
  type: string;
  userId: number;
  onSubmit: Function;
}

export default function BasicForm({ onSubmit, type }: BasicFormProps) {
  const [isFieldsEmpty, setIsEmpty] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const fieldsRef = useRef({});

  const changeButtonState = () => {
    setIsEmpty(isItemEmpty(fieldsRef.current, createItemColumns.length));
    if (!isFieldsEmpty) {
      setButtonDisabled(false);
    } else if (isFieldsEmpty) {
      setButtonDisabled(true);
    }
  };

  const handleConfigUpdate = (fieldName: string, newValue: any) => {
    fieldsRef.current = { ...fieldsRef.current, [fieldName]: newValue };
    changeButtonState();
  };

  const handleFromSubmit = () => {
    onSubmit(fieldsRef.current);
  };

  useEffect(() => {
    changeButtonState();
  }, [isFieldsEmpty]);

  const renderBasicForm = (type: string) => {
    switch (type) {
      case CREATE_ITEM_FORM:
        return (
          <CreateItemForm
            columns={createItemColumns}
            onChange={handleConfigUpdate}
            onSubmit={handleFromSubmit}
            isButtonDisabled={buttonDisabled}
          />
        );
      case REGISTRATION_FORM: {
        return (
          <RegistrationForm
            onChange={handleConfigUpdate}
            columns={registrationInputColumns}
            onSubmit={handleFromSubmit}
          />
        );
      }
      default:
        <Box>There is no data to display</Box>;
    }
  };
  return <Box>{renderBasicForm(type)}</Box>;
}
