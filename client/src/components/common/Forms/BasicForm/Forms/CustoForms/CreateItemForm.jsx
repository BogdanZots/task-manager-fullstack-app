import React, { useState } from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import InputItem from "../../../../Input/InputItem";
import { createItemColumns } from "../../../../../../config/config";

export const CreateItemForm = ({
  onChange,
  onButtonClick,
  isButtonDisabled,
}) => {
  return (
    <Box>
      {createItemColumns.map((column) => {
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
      <Button disabled={isButtonDisabled} onClick={onButtonClick}>
        Save item
      </Button>
    </Box>
  );
};
