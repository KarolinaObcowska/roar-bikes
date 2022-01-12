/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styles from "./Modal.module.sass";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ open, close, children }) => {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);
  return open
    ? createPortal(
        <div className={styles.bg} onClick={close}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>,
        el
      )
    : null;
};

export default Modal;
