import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import InputItem from "../../../../Input/InputItem";
import styled from "styled-components";

const FormWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const CreateItemForm = ({
  onChange,
  onSubmit,
  isButtonDisabled,
  columns,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <FormWrapper>
      {columns.map((column) => {
        return (
          <InputItem
            type={column.type}
            placeholder={column.description}
            value={column.value}
            onChangeEvent={onChange}
            label={column.label}
            name={column.name}
          />
        );
      })}
      <Button disabled={isButtonDisabled} onClick={handleFormSubmit}>
        Save item
      </Button>
    </FormWrapper>
  );
};
