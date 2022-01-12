import PropTypes from "prop-types";
import styles from "./ModelDescription.module.sass";
import ButtonCallToAction from "@Elements/ButtonCallToAction/ButtonCallToAction";

const ModelDescription = ({ model, description, id }) => {
  return (
    <div className={`${styles.description} ${styles.item}`}>
      <h2 className={styles.modelName}>{model}</h2>
      <p className={styles.modelDescription}>{description}</p>
      <ButtonCallToAction location={`/product/${id}`} title="learn more" />
    </div>
  );
};

ModelDescription.propTypes = {
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default ModelDescription;
