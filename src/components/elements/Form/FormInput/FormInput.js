import PropTypes from "prop-types";
import styles from "./FormInput.module.sass";

const FormInput = ({ labelName, inputName, inputType, errorMessage, handleChange, required }) => {
  return (
    <div className={styles.group}>
      <label className={styles.title}>{labelName}</label>
      <input
        name={inputName}
        className={styles.input}
        type={inputType}
        onChange={handleChange}
        required={required}
      />
      <small className={styles.errorMsg}>{errorMessage}</small>
    </div>
  );
};

FormInput.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

export default FormInput;
