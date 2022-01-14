import styles from "./SortProductForm.module.sass";
import PropTypes from "prop-types";

const SortProductForm = ({ text, labels }) => {
  return (
    <>
      <p className={styles.title}>{text}</p>
      {labels.map((el) => (
        <div key={el} className={styles.group}>
          <label className={styles.label}>{el}</label>
          <input type="checkbox" className={styles.input} />
        </div>
      ))}
      <div className={styles.selectGroup}>
        <label className={styles.selectLabel}>
          <select type="checkbox" className={styles.select}>
            <option>{text}</option>
            {labels.map((el) => (
              <option key={el}>{el}</option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
};

SortProductForm.propTypes = {
  text: PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired
};

export default SortProductForm;