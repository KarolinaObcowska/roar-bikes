import PropTypes from "prop-types";
import styles from "./FormInput.module.sass";

const FormInput = ({ name }) => {
  return (
    <div className={styles.group}>
      <label className={styles.title}>{name}</label>
      <input className={styles.input} type="text" />
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormInput;
