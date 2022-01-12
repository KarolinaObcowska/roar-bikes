/* eslint-disable react/prop-types */
import { createContext } from "react";
import Modal from "@Elements/Modal/Modal";
import useModal from "../hooks/useModal";

let ModalContext;
const { Provider } = (ModalContext = createContext());

const ModalProvider = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
