import styles from "./ProductListItem.module.sass";
import PropTypes from "prop-types";
import ButtonCallToAction from "@Elements/ButtonCallToAction/ButtonCallToAction";

const ProductListItem = ({ name, price, photo }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.productDetails}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <div className={styles.product}>
        <div className={styles.productPhoto}>
          <img src={photo} className={styles.photo} />
        </div>
        <ButtonCallToAction location={`/product/${name}`} title="show more" />
      </div>
    </li>
  );
};

ProductListItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired
};

export default ProductListItem;
