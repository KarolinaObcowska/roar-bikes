/* eslint-disable react/prop-types */
import styles from "./PhotoGallery.module.sass";

const PhotoGallery = ({ handleClick, thumbnails }) => {
  return (
    <div className={styles.photoGallery}>
      {thumbnails.map((el, i) => (
        <img
          className={styles.galleryItem}
          data-index={i}
          key={el.id}
          src={el}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
