import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface IInputItem {
  type: string;
  placeholder: string;
  onChangeEvent: (name: string, newValue: any) => void;
  label?: string;
  className?: string;
  id?: string;
  name: string;
  value?: any;
}
export default React.memo(function InputItem({
  type,
  placeholder,
  onChangeEvent,
  label,
  className,
  name,
}: IInputItem) {
  const [value, setValue] = useState("");
  const handleChange = (newValue: string) => {
    if (name) {
      setValue(newValue);
      onChangeEvent(name, newValue);
    }
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
