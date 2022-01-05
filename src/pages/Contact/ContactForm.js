import "./contactForm.sass";

const ContactForm = () => {
  return (
    <section className="container">
      <div className="form-container">
        <form className="form">
          <h2 className="form__title">CONTACT US</h2>
          <div className="form__group">
            <label className="form__group-title">First Name</label>
            <input className="form__group-input" type="text" />
          </div>
          <div className="form__group">
            <label className="form__group-title">Last Name</label>
            <input className="form__group-input" type="text" />
          </div>
          <div className="form__group">
            <label className="form__group-title">E-mail</label>
            <input className="form__group-input" type="email" />
          </div>
          <div className="form__group">
            <label className="form__group-title">Message</label>
            <textarea className="form__group-textarea" />
          </div>
          <button className="form__btn">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
