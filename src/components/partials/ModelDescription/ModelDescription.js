import PropTypes from "prop-types";
import styles from "./ModelDescription.module.sass";
import ButtonCallToAction from "@Elements/ButtonCallToAction/ButtonCallToAction";

const ModelDescription = ({ name, description }) => {
  return (
    <div className={`${styles.description} ${styles.item}`}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.text}>{description}</p>
      <ButtonCallToAction location={`/product/${name}`} title="learn more" />
    </div>
  );
};

ModelDescription.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ModelDescription;
