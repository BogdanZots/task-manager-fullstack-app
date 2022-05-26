import React, { useState } from "react";
import InputItem from "../../Input/InputItem";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

export default function CreateItemForm({
  inputColumns,
  getColumnsData,
  userId,
}) {
  console.log("RE render in create item");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const callbacks = [setTitle, setDescription];
  const values = [title, description];
  const inputColumnsCopy = inputColumns.map((fieldsObj) => ({ ...fieldsObj }));
  const changedInputColumns = inputColumnsCopy.map((fieldsObj, i) => ({
    ...fieldsObj,
    handleInputChange: callbacks[i],
    value: values[i],
  }));

  console.log("changerColumns", changedInputColumns);

  const handleButtonClick = getColumnsData({ userId, title, description });

  return (
    <Box>
      {changedInputColumns.map((column /* : any */, i) => {
        return (
          <InputItem
            type={column.type}
            placeholder={column.description}
            value={column.value}
            onChangeEvent={column.handleInputChange}
            label={column.label}
            name={column.name}
          />
        );
      })}
      <Button onClick={handleButtonClick}>Save item</Button>
    </Box>
  );
}
