import React from "react";
import style from "./Pages.module.css"

const Pages = (props) => {
  const { data } = props;
  return <div className={style.pages}>{data}</div>;
};

export default Pages;
