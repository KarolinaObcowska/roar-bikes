import PropTypes from "prop-types";
import styles from "./FormTextarea.module.sass";

const FormTextarea = ({ name }) => {
  return (
    <div className={styles.form__group}>
      <label className={styles.form__groupTitle}>{name}</label>
      <textarea className={styles.form__groupTextarea} />
    </div>
  );
};

FormTextarea.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormTextarea;
