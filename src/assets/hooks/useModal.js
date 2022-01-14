import { useState } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const closeModal = () => {
    setModal(false);
    document.body.style.position = "";
    document.body.style.top = ``;
  };
  const handleModal = (content = false) => {
    setModal(true);
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent, closeModal };
};

export default useModal;
