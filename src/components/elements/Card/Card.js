import PropTypes from "prop-types";
import styles from "./Card.module.sass";

const Card = ({ icon, description, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>{icon}</div>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.object
};

export default Card;
