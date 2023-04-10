import React, { useCallback } from "react";
import Button from "@mui/material/Button";
import InputItem from "../Inputs/InputItem";
import styled from "styled-components";
import { checkFormikFields } from "../../../helpres/checkFormikFields";
const FormWrapper = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreateItemForm = ({ onChange, onSubmit, isButtonDisabled, columns }: any) => {
  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const handleInputChange = (name: string, newValue: string) => {
    onChange(name, newValue);
  };

  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      {columns.map((column: any) => {
        return (
          <InputItem
            type={column.type}
            placeholder={column.description}
            value={column.value}
            onChangeEvent={handleInputChange}
            label={column.label}
            name={column.name}
          />
        );
      })}
      <Button disabled={isButtonDisabled} type="submit">
        Save item
      </Button>
    </FormWrapper>
  );
};
