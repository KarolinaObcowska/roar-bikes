import styles from "./SortProductForm.module.sass";
import PropTypes from "prop-types";

const SortProductForm = ({ inputName, text, labels, handleChange }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{text}</p>
      {labels.map((el) => (
        <div key={el} className={styles.group}>
          <label name={el.label} className={styles.label}>
            {el}
          </label>
          <input
            type="radio"
            value={el}
            name={inputName}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      ))}
    </div>
  );
};

SortProductForm.propTypes = {
  inputName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SortProductForm;
