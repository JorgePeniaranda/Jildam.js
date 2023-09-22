/* Styles */
import style from "./style.module.scss";

export default function Container({ className, children }) {
  return <main className={style.container + " " + className}>{children}</main>;
}
