import PropTypes from "prop-types";
import styles from "./FormInput.module.sass";

const FormInput = ({ name }) => {
  return (
    <div className="form__group">
      <label className={styles.form__groupTitle}>{name}</label>
      <input className={styles.form__groupInput} type="text" />
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormInput;
