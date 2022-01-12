/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import styles from "./Button.module.sass";

const Button = ({ text, width, variant, type }) => {
  return (
    <button className={`${styles[variant]} ${styles.button}`} style={{ width: width }} type={type}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string
};

export default Button;
