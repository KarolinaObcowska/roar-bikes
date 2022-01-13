/* eslint-disable no-unused-vars */
import Layout from "@Layout/Layout/Layout";
import Button from "@Elements/Button/Button";
import PageHeader from "@Elements/PageHeader/PageHeader";
import FormInput from "@Elements/Form/FormInput/FormInput";
import FormTextarea from "@Elements/Form/FormTextarea/FormTextarea";
import styles from "./Contact.module.sass";
import Tracker from "../../elements/Tracker/Tracker";
import useForm from "../../../assets/hooks/useForm";

const Contact = () => {
  const { handleChange, values, errors, handleSubmit } = useForm();

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
              <FormInput key={input.id} {...input} handleChange={handleChange} />
            ))}
            <FormTextarea
              errors={errors}
              handleChange={handleChange}
              textareaName="message"
              labelName="Message"
              onChange={handleChange}
            />
            {errors.message && <small className={styles.errorMsg}>{errors.message}</small>}

            <Button text="send message" buttonType="submit" />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
