import InputItem from "../../../../Input/InputItem";
import BasicSelect from "../../../../../Select/Select";
import { selectRoleColumns } from "../../../../../../config/config";
import { FormControl, FormHelperText, Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: blue;
`;

const StyledFormHelperText = styled(FormHelperText)`
  font-weight: 800;
  font-size: 40px;
`;

const RegistrationForm = ({
  onChange,
  columns,
  onSubmit,
  isButtonDisabled,
}: any) => {
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <FormControl>
      <StyledFormHelperText>Please sign up</StyledFormHelperText>
      {columns.map((column: any) => {
        return (
          <InputItem
            onChangeEvent={onChange}
            type={column.type}
            className={column.className}
            id={column.id}
            placeholder={column.placeholder}
            label={column.label}
            fieldName={column.fieldName}
          />
        );
      })}

      <BasicSelect
        onChangeEvent={onChange}
        columns={selectRoleColumns}
        title="Select person role"
      />
      <StyledButton
        type="submit"
        disabled={isButtonDisabled}
        onClick={handleFormSubmit}
        variant="contained"
      >
        Sign up
      </StyledButton>
    </FormControl>
  );
};

export default RegistrationForm;
