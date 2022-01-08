import PropTypes from "prop-types";
import styles from "./ButtonCallToAction.module.sass";
import { Link } from "react-router-dom";

const ButtonCallToAction = ({ location, title }) => {
  return (
    <Link to={location} className={styles.btn_cta}>
      {title}
    </Link>
  );
};

ButtonCallToAction.propTypes = {
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ButtonCallToAction;
