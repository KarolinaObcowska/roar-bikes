import PropTypes from "prop-types";
import styles from "./FormTextarea.module.sass";

const FormTextarea = ({ textareaName, labelName, handleChange }) => {
  return (
    <div className={styles.group}>
      <label className={styles.title}>{labelName}</label>
      <textarea name={textareaName} className={styles.textarea} onChange={handleChange} required />
    </div>
  );
};

FormTextarea.propTypes = {
  labelName: PropTypes.string.isRequired,
  textareaName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default FormTextarea;
