import PropTypes from "prop-types";
import styles from "./Tracker.module.sass";
import { BsDot } from "react-icons/bs";

const Tracker = ({ name }) => {
  return (
    <div className={styles.trackerContainer}>
      <div className={styles.tracker}>
        <p className={styles.tracker__item}>
          Home <BsDot /> Products <BsDot /> {name}
        </p>
      </div>
    </div>
  );
};

Tracker.propTypes = {
  name: PropTypes.string.isRequired
};

export default Tracker;
