import PropTypes from "prop-types";
import styles from "./FormTextarea.module.sass";

const FormTextarea = ({ textareaName, labelName }) => {
  return (
    <div className={styles.group}>
      <label className={styles.title}>{labelName}</label>
      <textarea name={textareaName} className={styles.textarea} />
    </div>
  );
};

FormTextarea.propTypes = {
  labelName: PropTypes.string.isRequired,
  textareaName: PropTypes.string.isRequired
};

export default FormTextarea;
