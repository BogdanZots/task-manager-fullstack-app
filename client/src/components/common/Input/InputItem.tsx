import { ConstructionOutlined } from "@mui/icons-material";
import React from "react";

interface IInputItem {
  type: string;
  placeholder: string;
  value: any;
  onChangeEvent: (e: any) => void;
  label?: string;
  className?: string;
  id?: string;
  name?: string;
}
export default React.memo(function InputItem({
  type,
  placeholder,
  value,
  onChangeEvent,
  label,
  className,
  name,
}: IInputItem) {
  console.log("re-render");
  return (
    <div className='form-floating'>
      <input
        value={value}
        onChange={(e) => onChangeEvent(e.target.value)}
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
