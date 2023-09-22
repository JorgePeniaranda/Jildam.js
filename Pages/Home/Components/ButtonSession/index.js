import Link from "next/link";
import React from "react";

export default function ButtonSession({ text, to, toText, className }) {
  return (
    <ul
      className={
        "flex flex-col justify-center align-middle bottom-10 " + className
      }
    >
      <span className="text-xl underline underline-offset-2 mb-4">{text}</span>
      <Link
        href={to}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white text-center py-2 text-2xl rounded-lg"
      >
        {toText}
      </Link>
    </ul>
  );
}
