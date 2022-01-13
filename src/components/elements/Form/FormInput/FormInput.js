import PropTypes from "prop-types";
import styles from "./FormInput.module.sass";

const FormInput = ({ labelName, inputName, inputType, handleChange, values }) => {
  return (
    <div className={styles.group}>
      <label className={styles.title}>{labelName}</label>
      <input
        name={inputName}
        value={values[inputName]}
        className={styles.input}
        type={inputType}
        onChange={handleChange}
      />
    </div>
  );
};

FormInput.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object
};

export default FormInput;
