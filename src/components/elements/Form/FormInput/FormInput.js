import PropTypes from "prop-types";
import styles from "./FormInput.module.sass";

const FormInput = ({
  inputName,
  inputType,
  inputPlaceholder,
  labelName,
  isReguired,
  inputChange
}) => {
  return (
    <div className={styles.group}>
      <label className={styles.title}>{labelName}</label>
      <input
        placeholder={inputPlaceholder}
        name={inputName}
        className={styles.input}
        type={inputType}
        required={isReguired}
        onChange={inputChange}
      />
    </div>
  );
};

FormInput.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  isReguired: PropTypes.bool,
  inputPlaceholder: PropTypes.string,
  inputChange: PropTypes.func
};

export default FormInput;
