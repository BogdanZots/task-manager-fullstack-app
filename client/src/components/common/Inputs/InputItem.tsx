import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface IInputItem {
  type: string;
  placeholder: string;
  onChangeEvent: (fieldName: string, newValue: any) => void;
  label?: string;
  className?: string;
  id?: string;
  name?: string;
  fieldName: string;
  value?: any;
}
export default React.memo(function InputItem({
  type,
  placeholder,
  onChangeEvent,
  label,
  className,
  name,
  fieldName,
}: IInputItem) {
  const [value, setValue] = useState("");
  const handleChange = (newValue: string) => {
    setValue(newValue);
    onChangeEvent(fieldName, newValue);
  };
  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={e => handleChange(e.target.value)}
      type={type}
      id="floatingInput"
      placeholder={placeholder}
      name={name}
      label={label}
    />
  );
});
