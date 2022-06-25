import { useState } from "react";
import { useDeepEffect } from "../../../../hooks/useDeepfEffect";
import { CREATE_ITEM_FORM, REGISTRATION_FORM } from "../../../../const/consts";
import {
  configsLength,
  registrationInputColumns,
  createItemColumns,
} from "../../../../config/config";
import { isItemEmpty } from "../../../../helpres/isItemEmpty";
import { CreateItemForm } from "./Forms/CustoForms/CreateItemForm";
import RegistrationForm from "./Forms/CustoForms/ResistrationForm";

interface BasicFormProps {
  type: string;
  userId: number;
  submitForm: Function;
}

export default function BasicForm({
  submitForm,
  type,
  userId,
}: BasicFormProps) {
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
    setFields((prevFields) => ({
      ...prevFields,
      [fieldName]: newValue,
    }));
  };

  const handleFromSubmit = (e: any) => {
    submitForm(fields);
  };



  useDeepEffect(changeButtonState, [fields, isFieldsEmpty]);

  const renderBasicForm = (type: string) => {
    switch (type) {
      case CREATE_ITEM_FORM:
        return (
          <CreateItemForm
            columns={createItemColumns}
            onChange={handleConfigUpdate}
            submitForm={handleFromSubmit}
            isButtonDisabled={buttonDisabled}
          />
        );
      case REGISTRATION_FORM: {
        return (
          <RegistrationForm
            onChange={handleConfigUpdate}
            columns={registrationInputColumns}
            submitForm={handleFromSubmit}
          />
        );
      }
      default:
        <div>There is no data to display</div>;
    }
  };
  return <div>{renderBasicForm(type)}</div>;
}
