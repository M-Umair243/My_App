import React from "react";
import CSS from "./Container.module.css";
function Container({ children }) {
  return <div className={CSS.container}>{children}</div>;
}

export default Container;
