import React, { FC } from "react";
import { ButtonType } from "../../../types/type";
import "./style.scss";

const Button: FC<ButtonType> = ({
  text,
  color,
  onClick,
  disabled,
  loading
}) => {
  return (
    <button
      type="submit"
      className={`button button-${loading || disabled ? 'disabled' : 'default'} ${color ? `button-${color}` : 'default'}`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading? 'loading' : text}
    </button>
  );
}

export default Button;
