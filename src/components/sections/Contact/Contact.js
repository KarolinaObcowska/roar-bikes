/* eslint-disable no-unused-vars */
import Layout from "@Layout/Layout/Layout";
import Button from "@Elements/Button/Button";
import PageHeader from "@Elements/PageHeader/PageHeader";
import FormInput from "@Elements/Form/FormInput/FormInput";
import FormTextarea from "@Elements/Form/FormTextarea/FormTextarea";
import styles from "./Contact.module.sass";
import Tracker from "../../elements/Tracker/Tracker";
import useForm from "../../../assets/hooks/useForm";
import { contactValidations as validations } from "../../../assets/data/validations";

const Contact = () => {
  const { handleChange, values, handleSubmit, errors } = useForm({ validations });

  const inputs = [
    {
      id: 1,
      inputName: "firstname",
      labelName: "First Name",
      inputType: "text"
    },
    {
      id: 2,
      inputName: "lastname",
      labelName: "Last Name",
      inputType: "text"
    },
    {
      id: 3,
      inputName: "email",
      labelName: "E-mail",
      inputType: "email"
    }
  ];
  console.log(errors);
  return (
    <Layout>
      <section className={styles.contact}>
        <Tracker />
        <PageHeader title="contact us" />
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            {inputs.map((input) => (
              <>
                <FormInput
                  key={input.id}
                  {...input}
                  handleChange={handleChange}
                  errors={errors}
                  values={values}
                  onChange={handleChange}
                />
                {errors[input.inputName] && (
                  <small className={styles.errMessage}>{errors[input.inputName]}</small>
                )}
              </>
            ))}
            <FormTextarea
              errors={errors}
              values={values}
              handleChange={handleChange}
              textareaName="message"
              labelName="Message"
              onChange={handleChange}
            />
            {errors.message && <small className={styles.errMessage}>{errors.message}</small>}

            <Button text="send message" buttonType="submit" />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
