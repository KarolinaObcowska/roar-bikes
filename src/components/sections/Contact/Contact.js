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
            <FormInput name="First Name" />
            <FormInput name="Last Name" />
            <FormInput name="E-mail" />
            <FormTextarea name="Message" />
            <Button text="send message" type="submit" />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
