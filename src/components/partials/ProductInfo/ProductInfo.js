import PropTypes from "prop-types";
import { BsFillCircleFill } from "react-icons/bs";
import Button from "@Elements/Button/Button";
import styles from "./ProductInfo.module.sass";

const ProductInfo = ({ name, price }) => {
  return (
    <div className={styles.item__info}>
      <div className={styles.info}>
        <h3 className={styles.info__name}>{name}</h3>
        <h3 className={styles.info__price}>${price}</h3>
      </div>
      <p className={styles.info__color}>Color:</p>
      <BsFillCircleFill color="#e21f50" className={styles.info__color_item} />
      <BsFillCircleFill color="#152891" className={styles.info__color_item} />
      <p className={styles.info__size}>Size:</p>
      <select className={styles.info__select}>
        <option value="-">Please select</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
      <p className={styles.info__quantity}>Quantity:</p>
      <input type="number" className={styles.info__input} />
      <Button text="add to cart" width="100%" />
    </div>
  );
};

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductInfo;
