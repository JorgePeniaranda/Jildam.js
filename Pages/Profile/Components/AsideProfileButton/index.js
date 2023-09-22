import Link from "next/link";
import { useLocation } from "react-router-dom";

export default function AsideProfileButton({ to, text, className }) {
  return (
    <Link
      to={to}
      className={
        (useLocation().pathname === to
          ? "bg-blue-600 hover:bg-blue-500"
          : "bg-zinc-500 hover:bg-zinc-400") +
        " transition-all ease-linear text-white w-3/5 py-3 text-xl rounded-lg text-center " +
        className
      }
    >
      {text}
    </Link>
  );
}
