import styles from "./ProductListItem.module.sass";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductListItem = ({ name, price, photo }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.product}>
        <div className={styles.productPhoto}>
          <img src={photo} className={styles.photo} />
        </div>
        <div className={styles.productDetails}>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>${price}</p>
        </div>
      </div>
      <Link to={`/product/${name}`} className={styles.link}>
        SHOW MORE
      </Link>
    </li>
  );
};

ProductListItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired
};

export default ProductListItem;
