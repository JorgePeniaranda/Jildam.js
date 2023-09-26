/* Styles */
import style from "./style.module.scss";

export const Container = ({ className, children }) => {
  return <main className={style.container + " " + className}>{children}</main>;
};
