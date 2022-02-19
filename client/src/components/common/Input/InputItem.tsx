import React, { useState } from "react";

interface IInputItem {
  type: string;
  placeholder: string;
  onChangeEvent: (fieldName: string, newValue: any) => void;
  label?: string;
  className?: string;
  id?: string;
  name?: string;
  fieldName: string;
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
    <div className='form-floating'>
      <input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        type={type}
        className={`form-control + ${className || ""}`}
        id='floatingInput'
        placeholder={placeholder}
        name={name}
      />
      <label htmlFor='floatingInput'>{label}</label>
    </div>
  );
});
