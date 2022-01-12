import { useContext } from "react";
import Layout from "@Layout/Layout/Layout";
import Button from "@Elements/Button/Button";
import PageHeader from "@Elements/PageHeader/PageHeader";
import FormInput from "@Elements/Form/FormInput/FormInput";
import FormTextarea from "@Elements/Form/FormTextarea/FormTextarea";
import styles from "./Contact.module.sass";
import Tracker from "../../elements/Tracker/Tracker";
import { ModalContext } from "../../../assets/context/modalContext";

const Contact = () => {
  const { handleModal } = useContext(ModalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleModal("The message has been sent.");
  };
  return (
    <Layout>
      <section className={styles.contact}>
        <Tracker />
        <PageHeader title="contact us" />
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <FormInput
              isRequired={true}
              inputName="firstname"
              labelName="First Name"
              inputType="text"
            />
            <FormInput
              isRequired={true}
              inputName="lastname"
              labelName="Last Name"
              inputType="text"
            />
            <FormInput isRequired={true} inputName="email" labelName="E-mail" inputType="email" />
            <FormTextarea isRequired={true} textareaName="message" labelName="Message" />
            <Button text="send message" buttonType="submit" />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
