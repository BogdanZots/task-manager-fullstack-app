import Button from "@mui/material/Button";
import InputItem from "../Inputs/InputItem";
import styled from "styled-components";

const FormWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const CreateItemForm = ({ onChange, onSubmit, isButtonDisabled, columns }: any) => {
  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <FormWrapper>
      {columns.map((column: any) => {
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
    </FormWrapper>
  );
};
