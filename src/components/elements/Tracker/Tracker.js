/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import styles from "./Tracker.module.sass";
import { BsDot } from "react-icons/bs";

const Tracker = () => {
  const location = window.location.pathname.toUpperCase().split("/").filter(String);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tracker}>
        <p className={styles.text}>
          HOME{" "}
          {location.map((el) => (
            <span key={el}>
              <BsDot /> {el}{" "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Tracker;
