import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import FormTextarea from "../../components/FormTextarea/FormTextarea";
import "./contactForm.sass";
const ContactForm = () => {
  return (
    <section className="container">
      <div className="form-container">
        <form className="form">
          <h2 className="form__title">CONTACT US</h2>
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
