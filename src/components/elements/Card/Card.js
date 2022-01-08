import PropTypes from "prop-types";
import styles from "./Card.module.sass";

const Card = ({ icon, description, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__iconContainer}>{icon}</div>
      <h6 className={styles.card__title}>{title}</h6>
      <p className={styles.card__description}>{description}</p>
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string
};

export default Card;
