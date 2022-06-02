import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRemindsItemRequest } from "../../../../store/actions/remindsAction";
import { CREATE_ITEM_FORM, REGISTRATION_FORM } from "../../../../const/consts";
import { configsLength, createItemColumns } from "../../../../config/config";
import { isItemEmpty } from "../../../../helpres/isItemEmpty";
import { CreateItemForm } from "./Forms/CustoForms/CreateItemForm";

export default function BasicForm({ type, userId }) {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({});
  const [isFieldsEmpty, setIsEmpty] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleConfigUpdate = (fieldName, newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      [fieldName]: newValue,
    }));
  };

  const handleSaveItem = () => {
    dispatch(
      setRemindsItemRequest({
        ...fields,
        userId,
      })
    );
  };

  useEffect(() => {
    setIsEmpty(isItemEmpty(fields, configsLength[type]));
    if (!isFieldsEmpty) {
      setButtonDisabled(false);
    } else if (isFieldsEmpty) {
      setButtonDisabled(true);
    }
  }, [fields, isFieldsEmpty]);

  const renderBasicForm = (type) => {
    switch (type) {
      case CREATE_ITEM_FORM:
        return (
          <CreateItemForm
            onChange={handleConfigUpdate}
            onButtonClick={handleSaveItem}
            isButtonDisabled={buttonDisabled}
          />
        );
      case REGISTRATION_FORM: {
        return <div>Reg Form </div>;
      }
      default:
        <div>There is no data to display</div>;
    }
  };
  return <div>{renderBasicForm(type)}</div>;
}
