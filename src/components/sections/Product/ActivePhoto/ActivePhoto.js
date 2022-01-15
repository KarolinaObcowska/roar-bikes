/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./ActivePhoto.module.sass";

const ActivePhoto = ({ activePhoto }) => {
  return (
    <figure className={styles.wrapper}>
      <img className={styles.photo} src={activePhoto} />
    </figure>
  );
};

export default ActivePhoto;
