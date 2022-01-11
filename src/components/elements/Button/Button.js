/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import styles from "./Button.module.sass";

const Button = ({ text, width, variant, callback }) => {
  return (
    <button className={`${styles[variant]} ${styles.button}`} style={{ width: width }}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  variant: PropTypes.string,
  callback: PropTypes.func
};

export default Button;
