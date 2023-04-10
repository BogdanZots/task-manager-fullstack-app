import { useState } from "react";
import { useDeepEffect } from "../../../hooks/useDeepfEffect";
import { CREATE_ITEM_FORM, REGISTRATION_FORM } from "../../../const/consts";
import { configsLength, registrationInputColumns, createItemColumns } from "../../../config/config";
import { isItemEmpty } from "../../../helpres/isItemEmpty";
import { CreateItemForm } from "./CreateItemForm";
import { FormikCreateItemForm } from "./FormikCreateItemForm";
import RegistrationForm from "./RegistrationForm";
import { Box } from "@mui/material";

interface BasicFormProps {
  type: string;
  userId: number;
  onSubmit: Function;
  isVisible?: boolean;
  onClose?: () => void;
}

export default function BasicForm({ onSubmit, type, userId, onClose, isVisible }: BasicFormProps) {
  const [fields, setFields] = useState<{ [field: string]: any }>({});
  const [isFieldsEmpty, setIsEmpty] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const changeButtonState = () => {
    setIsEmpty(isItemEmpty(fields, configsLength[type]));
    if (!isFieldsEmpty) {
      setButtonDisabled(false);
    } else if (isFieldsEmpty) {
      setButtonDisabled(true);
    }
  };

  const handleConfigUpdate = (fieldName: string, newValue: any) => {
    setFields(prevFields => ({
      ...prevFields,
      [fieldName]: newValue,
    }));
  };

  const handleFromSubmit = () => {
    onSubmit(fields);

    onClose && onClose();
  };

  useDeepEffect(changeButtonState, [fields, isFieldsEmpty]);

  const renderFormVariant = () => {
    if (process.env.REACT_APP_FORMS_VARIANT === "external") {
      return (
        <FormikCreateItemForm
          columns={createItemColumns}
          onChange={handleConfigUpdate}
          onSubmit={handleFromSubmit}
        />
      );
    } else {
      return (
        <CreateItemForm
          columns={createItemColumns}
          onChange={handleConfigUpdate}
          onSubmit={handleFromSubmit}
          isButtonDisabled={buttonDisabled}
        />
      );
    }
  };

  const renderBasicForm = (type: string) => {
    if (!isVisible) return null;
    switch (type) {
      case CREATE_ITEM_FORM:
        return <>{renderFormVariant()}</>;
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
