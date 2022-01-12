import { useContext } from "react";
import Layout from "@Layout/Layout/Layout";
import Button from "@Elements/Button/Button";
import PageHeader from "@Elements/PageHeader/PageHeader";
import FormInput from "@Elements/Form/FormInput/FormInput";
import FormTextarea from "@Elements/Form/FormTextarea/FormTextarea";
import styles from "./Contact.module.sass";
import Tracker from "../../elements/Tracker/Tracker";
import { ModalContext } from "../../../assets/context/modalContext";
import { useState } from "react/cjs/react.development";

const Contact = () => {
  const { handleModal } = useContext(ModalContext);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.firstname === "" ||
      values.lastname === "" ||
      values.email === "" ||
      values.message === ""
    ) {
      handleModal("Fill in all the fields of the form.");
    } else {
      handleModal("Message has been sent.");
      event.target.reset();
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const inputs = [
    {
      id: 1,
      inputName: "firstname",
      labelName: "First Name",
      inputType: "text",
      errorMessage: "Invalid First Name",
      required: true
    },
    {
      id: 2,
      inputName: "lastname",
      labelName: "Last Name",
      inputType: "text",
      errorMessage: "Invalid Last Name",
      required: true
    },
    {
      id: 3,
      inputName: "email",
      labelName: "E-mail",
      inputType: "email",
      errorMessage: "Invalid E-mail",
      required: true
    }
  ];

  return (
    <Layout>
      <section className={styles.contact}>
        <Tracker />
        <PageHeader title="contact us" />
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.inputName]}
                handleChange={handleChange}
              />
            ))}
            <FormTextarea
              handleChange={handleChange}
              value={values.message}
              textareaName="message"
              labelName="Message"
              onChange={handleChange}
            />
            <Button text="send message" buttonType="submit" />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
