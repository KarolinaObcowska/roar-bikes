import PropTypes from "prop-types";
import styles from "./FooterCard.module.sass";
const FooterCard = ({ titles }) => {
  return (
    <div className={styles.card}>
      {titles.map((title) => (
        <p key={title}>{title}</p>
      ))}
    </div>
  );
};

FooterCard.propTypes = {
  titles: PropTypes.array.isRequired
};

export default FooterCard;
