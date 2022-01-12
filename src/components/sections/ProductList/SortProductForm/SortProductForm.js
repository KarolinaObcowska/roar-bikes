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
    </>
  );
};

SortProductForm.propTypes = {
  text: PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired
};

export default SortProductForm;
