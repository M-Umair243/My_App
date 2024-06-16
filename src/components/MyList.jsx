import React from "react";
import Styles from "./MyList.module.css";
import ButtonContainer from "./ButtonContainer";
function MyList({ index, handleDelete, e }) {
  return (
    <>
      <li className={`${Styles.Ex_list} list-group-item`}>
        {index}
        <ButtonContainer
          text="Delete"
          index={index}
          handleDelete={handleDelete}
          e={e}
        />
      </li>
    </>
  );
}

export default MyList;
