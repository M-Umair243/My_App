import React from "react";
import CSS from "./ButtonContainer.module.css";
function ButtonContainer({ text, handleDelete, e }) {
  // const btnHandler = (event) => {
  //   alert(`${index}`);
  //   console.log(event);
  // };
  return (
    <button
      onClick={() => handleDelete(e)}
      className={`${CSS.btnContainer} btn btn-info`}
      type="button"
    >
      {text}
    </button>
  );
}

export default ButtonContainer;
