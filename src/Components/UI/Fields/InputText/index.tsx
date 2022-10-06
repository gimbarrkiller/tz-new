import React, { FC } from "react";
import { InputType } from "../../../../types/type";
import TextField from '@material-ui/core/TextField';
import "./style.scss";

const InputText: FC<InputType> = ({
  placeholder,
  size= 'big',
  error,
  disabled,
  type,
}) => {
  return (
    <TextField
      className={`input-text ${size ? `input-text-${size}` : ''}`}
      error={error}
      id="filled-required"
      label={placeholder}
      disabled={disabled}
      type={type}
    />
  )
}
export default InputText;