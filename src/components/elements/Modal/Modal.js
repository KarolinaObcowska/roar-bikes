/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styles from "./Modal.module.sass";
import { useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../../../assets/context/modalContext";

const modalRoot = document.getElementById("modal");

const Modal = () => {
  const { modalContent, modal, closeModal } = useContext(ModalContext);
  const el = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);
  return modal
    ? createPortal(
        <div className={styles.bg} onClick={closeModal}>
          <div className={styles.modal} onClick={closeModal}>
            <p>{modalContent}</p>
          </div>
        </div>,
        el
      )
    : null;
};

export default Modal;
