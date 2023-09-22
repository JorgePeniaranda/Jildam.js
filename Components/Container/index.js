import React from "react";

export default function Container(props) {
  return (
    <main
      className={
        "w-full h-full pt-24 bg-white dark:bg-[#3d3e3e] dark:text-white " +
        props.className
      }
    >
      {props.children}
    </main>
  );
}
