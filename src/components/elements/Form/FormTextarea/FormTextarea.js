import PropTypes from "prop-types";
import styles from "./FormTextarea.module.sass";

const FormTextarea = ({ textareaName, labelName, values, handleChange }) => {
  return (
    <div className={styles.group}>
      <label className={styles.title}>{labelName}</label>
      <textarea
        value={values[textareaName]}
        name={textareaName}
        className={styles.textarea}
        onChange={handleChange}
      />
    </div>
  );
};

FormTextarea.propTypes = {
  labelName: PropTypes.string.isRequired,
  textareaName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object
};

export default FormTextarea;
