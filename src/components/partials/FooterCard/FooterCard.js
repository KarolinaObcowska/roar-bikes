import PropTypes from "prop-types";
import styles from "./FooterCard.module.sass";
const FooterCard = ({ titles }) => {
  return (
    <div className={styles.footer__card}>
      {titles.map((title) => (
        <p key={title.id}>{title}</p>
      ))}
    </div>
  );
};

FooterCard.propTypes = {
  titles: PropTypes.array.isRequired
};

export default FooterCard;
