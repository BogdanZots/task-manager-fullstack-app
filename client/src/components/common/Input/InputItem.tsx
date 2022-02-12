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
export default function InputItem({
  type,
  placeholder,
  value,
  onChangeEvent,
  label,
  className,
  name,
}: IInputItem) {
  const v = name ? name : "";
  return (
    <div className='form-floating'>
      <input
        value={value[v]}
        onChange={(e) => onChangeEvent(e)}
        type={type}
        className={`form-control + ${className || ""}`}
        id='floatingInput'
        placeholder={placeholder}
        name={name}
      />
      <label htmlFor='floatingInput'>{label}</label>
    </div>
  );
}
