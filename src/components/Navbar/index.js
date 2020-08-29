import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css"

export const Navbar = (props) => {
  return (
    <div className={style.navbar}>
      <Link to={"/page1"}>
        <div onClick={() => props.setIndex(0)}>page1</div>
      </Link>
      <Link to={"/page2"}>
        <div onClick={() => props.setIndex(1)}>page2</div>
      </Link>
      <Link to={"/page3"}>
        <div onClick={() => props.setIndex(2)}>page3</div>
      </Link>{" "}
    </div>
  );
};
