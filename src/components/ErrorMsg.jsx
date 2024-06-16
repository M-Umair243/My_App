import React from "react";
import CSS from "./ErrorMsg.module.css";
function ErrorMsg({ itemList }) {
  return (
    <>
      {itemList.length === 0 && (
        <p className={CSS.text}>Please Enter Data Above Input</p>
      )}
    </>
  );
}

export default ErrorMsg;
