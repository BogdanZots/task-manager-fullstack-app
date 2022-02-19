import { CREATE_ITEM_FORM } from "../../../const/consts";
import InputItem from "../Input/InputItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setRemindsItemRequest } from "../../../store/actions/remindsAction";
import { createItemColumns } from "../../../config/config";
/* interface IBasicFormProps {
  type: string;
  fields: any[];
} */

export default function BasicForm({ type, userId } /* : IBasicFormProps */) {
  const dispatch = useDispatch();

  let data = {};
  const handleChange = (fieldName, newValue) => {
    data = { ...data, [fieldName]: newValue };
  };

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
            <Button onClick={handleSaveItem}>Save item</Button>
          </Box>
        );
      default:
        <div>There is no data to display</div>;
    }
  };
  return <div>{renderBasicForm(type)}</div>;
}
