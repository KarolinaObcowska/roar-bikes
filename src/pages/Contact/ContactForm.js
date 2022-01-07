import Button from "../../components/Button/Button";
import PageHeader from "../../components/PageHeader/PageHeader";
import FormInput from "../../components/Form/FormInput/FormInput";
import FormTextarea from "../../components/Form/FormTextarea/FormTextarea";
import "./contactForm.sass";
const ContactForm = () => {
  return (
    <section className="container">
      <PageHeader title="contact us" />
      <div className="form-container">
        <form className="form">
          <FormInput name="First Name" />
          <FormInput name="Last Name" />
          <FormInput name="E-mail" />
          <FormTextarea name="Message" />
          <Button text="send message" />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
