import styles from "./ProductListItem.module.sass";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@Elements/Button/Button";
const ProductListItem = ({ name, price, photo }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.product}>
        <div className={styles.productDetails}>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>${price}</p>
        </div>
        <div className={styles.productPhoto}>
          <img src={photo} className={styles.photo} />
        </div>
      </div>
      <Button location={`/product/${name}`} text="SHOW MORE" />
    </li>
  );
};

ProductListItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired
};

export default ProductListItem;
