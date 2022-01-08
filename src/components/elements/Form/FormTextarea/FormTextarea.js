import PropTypes from "prop-types";
import styles from "./FormTextarea.module.sass";

const FormTextarea = ({ name }) => {
  return (
    <div className={styles.group}>
      <label className={styles.title}>{name}</label>
      <textarea className={styles.textarea} />
    </div>
  );
};

FormTextarea.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormTextarea;
