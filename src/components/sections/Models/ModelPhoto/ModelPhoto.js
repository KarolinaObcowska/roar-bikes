import PropTypes from "prop-types";
import styles from "./ModelPhoto.module.sass";

const ModelPhoto = ({ photo }) => {
  return (
    <div className={styles.item} id="item">
      <figure className={styles.figure}>
        <img src={photo} className={styles.photo} alt="Picutre of Siaseme model bike." />
      </figure>
    </div>
  );
};

ModelPhoto.propTypes = {
  photo: PropTypes.string.isRequired
};

export default ModelPhoto;
