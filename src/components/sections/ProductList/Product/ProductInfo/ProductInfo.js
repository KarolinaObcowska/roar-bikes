import PropTypes from "prop-types";
import { BsFillCircleFill } from "react-icons/bs";
import Button from "@Elements/Button/Button";
import styles from "./ProductInfo.module.sass";

const ProductInfo = ({ name, price }) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoContainer}>
        <h3 className={styles.productName}>{name}</h3>
        <h3 className={styles.productPrice}>${price}</h3>
      </div>
      <p className={styles.productColor}>Color:</p>
      <BsFillCircleFill color="#e21f50" className={styles.colorIcon} />
      <BsFillCircleFill color="#152891" className={styles.colorIcon} />
      <p className={styles.productSize}>Size:</p>
      <select className={styles.sizeSelect}>
        <option value="-">Please select</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
      <p className={styles.productQuantity}>Quantity:</p>
      <input type="number" className={styles.quantityInput} />
      <Button text="add to cart" width="100%" />
    </div>
  );
};

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductInfo;
