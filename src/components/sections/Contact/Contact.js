import Layout from "@Layout/Layout/Layout";
import Button from "@Elements/Button/Button";
import PageHeader from "@Elements/PageHeader/PageHeader";
import FormInput from "@Elements/Form/FormInput/FormInput";
import FormTextarea from "@Elements/Form/FormTextarea/FormTextarea";
import styles from "./Contact.module.sass";

const Contact = () => {
  return (
    <Layout>
      <section className={styles.contact}>
        <PageHeader title="contact us" />
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <FormInput name="First Name" />
            <FormInput name="Last Name" />
            <FormInput name="E-mail" />
            <FormTextarea name="Message" />
            <Button text="send message" />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
