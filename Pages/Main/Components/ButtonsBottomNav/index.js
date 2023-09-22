import Link from "next/link";
import React from "react";

export default function ButtonsBottomNav(props) {
  return (
    <Link
      to={props.to}
      className={
        "bg-blue-600 hover:bg-blue-500 rounded-lg w-96 h-14 ease-linear transition-all flex items-center justify-center text-xl text-white " +
        (props.className ? props.className : "")
      }
    >
      {props.children}
    </Link>
  );
}
