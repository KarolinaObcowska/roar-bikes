import PropTypes from "prop-types";
import styles from "./Button.module.sass";

const Button = ({ text, width, variant }) => {
  return (
    <button className={styles[variant]} style={{ width: width }}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  variant: PropTypes.string
};

export default Button;
