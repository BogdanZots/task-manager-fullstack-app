import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import InputItem from "../../../../Input/InputItem";

export const CreateItemForm = ({
  onChange,
  submitForm,
  isButtonDisabled,
  columns,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };
  return (
    <Box>
      {columns.map((column) => {
        return (
          <InputItem
            type={column.type}
            placeholder={column.description}
            value={column.value}
            onChangeEvent={onChange}
            label={column.label}
            name={column.name}
            fieldName={column.fieldName}
          />
        );
      })}
      <Button disabled={isButtonDisabled} onClick={handleFormSubmit}>
        Save item
      </Button>
    </Box>
  );
};
