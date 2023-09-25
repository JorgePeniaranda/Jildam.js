/* Components */
import { FiX } from "react-icons/fi";

/* Styles */
import style from "./style.module.scss";

export const Modal = ({ children, show, setShow, title, id }) => {
  const closeModal = () => {
    setShow(false);
  };
  return show ? (
    <div className={style.modal}>
      <div id={id}>
        <span aria-label="close" id="close">
          <FiX onClick={() => closeModal()} />
        </span>
        <h1>{title}</h1>
        <div id="content">{children}</div>
      </div>
    </div>
  ) : null;
};
