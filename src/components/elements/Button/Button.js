/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import styles from "./Button.module.sass";

const Button = ({ text, width, variant, buttonType }) => {
  return (
    <button
      className={`${styles[variant]} ${styles.button}`}
      style={{ width: width }}
      type={buttonType}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  variant: PropTypes.string,
  buttonType: PropTypes.string
};

export default Button;
