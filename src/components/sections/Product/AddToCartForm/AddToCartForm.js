/* eslint-disable no-unused-vars */
import useForm from "../../../../assets/hooks/useForm";
import PropTypes from "prop-types";
import Button from "@Elements/Button/Button";
import styles from "./AddToCartForm.module.sass";
import { productValidations as validations } from "../../../../assets/data/validations";
const AddToCartForm = ({ name, price, sizes }) => {
  const { handleChange, values, handleSubmit, errors } = useForm({ validations });
  return (
    <form className={styles.info} onSubmit={handleSubmit}>
      <div className={styles.infoContainer}>
        <h3 className={styles.productName}>{name}</h3>
        <h3 className={styles.productPrice}>${price}</h3>
      </div>
      <label className={styles.productColor}>
        Color:
        <select
          name="color"
          className={styles.formSelect}
          value={values[name]}
          onChange={handleChange}>
          <option>Please select</option>
          <option value="Black">Black</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
        </select>
        {errors.color && <small className={styles.errMessage}>{errors.color}</small>}
      </label>
      <label className={styles.productSize}>
        {" "}
        Size:
        <select
          name="size"
          className={styles.formSelect}
          value={values[name]}
          onChange={handleChange}>
          <option>Please select</option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
          ;
        </select>
        {errors.size && <small className={styles.errMessage}>{errors.size}</small>}
      </label>
      <label className={styles.productQuantity}>
        {" "}
        Quantity:
        <input
          name="quantity"
          type="number"
          value={values[name]}
          className={styles.quantityInput}
          onChange={handleChange}
        />
        {errors.quantity && <small className={styles.errMessage}>{errors.quantity}</small>}
      </label>
      <Button text="add to cart" width="100%" type="submit" />
    </form>
  );
};

AddToCartForm.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired
};

export default AddToCartForm;
