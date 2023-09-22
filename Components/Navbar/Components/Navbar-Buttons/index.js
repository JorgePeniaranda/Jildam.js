import Link from "next/link";

export default function NavButton(props) {
  return (
    <Link
      href={props.to}
      className={
        "hover:scale-105 hover:underline underline-offset-4 ease-linear transition-all hover:bg-gray-200/60 dark:hover:bg-[#3d3e3e]/40 hover:text-blue-500 py-2 px-10 rounded-lg " +
        (props.className ? props.className : "")
      }
    >
      {props.children}
    </Link>
  );
}
