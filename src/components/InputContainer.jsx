import React from "react";
import CSS from "./InputContainer.module.css";
function InputContainer({ children }) {
  return <div className={CSS.InputContainer}>{children}</div>;
}

export default InputContainer;
