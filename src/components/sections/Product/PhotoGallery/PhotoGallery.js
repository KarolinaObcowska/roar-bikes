import { PropTypes } from "prop-types";
import styles from "./PhotoGallery.module.sass";

const PhotoGallery = ({ handleClick, thumbnails }) => {
  return (
    <div className={styles.gallery}>
      {thumbnails.map((el, i) => (
        <img className={styles.photo} data-index={i} key={i} src={el} onClick={handleClick} />
      ))}
    </div>
  );
};

PhotoGallery.propTypes = {
  handleClick: PropTypes.func.isRequired,
  thumbnails: PropTypes.array.isRequired
};

export default PhotoGallery;
