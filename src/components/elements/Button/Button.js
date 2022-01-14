/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import styles from "./Button.module.sass";

const Button = ({ text, width, variant, buttonType, callback }) => {
  return (
    <button
      id="btn"
      className={`${styles[variant]} ${styles.button}`}
      style={{ width: width }}
      type={buttonType}
      onClick={callback}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  variant: PropTypes.string,
  buttonType: PropTypes.string,
  callback: PropTypes.func
};

export default Button;
