/* eslint-disable no-unused-vars */
import useForm from "../../../../../assets/hooks/useForm";
import PropTypes from "prop-types";
import Button from "@Elements/Button/Button";
import styles from "./AddToCartForm.module.sass";

const AddToCartForm = ({ name, price }) => {
  const { handleChange, values, handleSubmit, errors } = useForm({
    validations: {
      color: {
        custom: {
          isValid: (value) => value !== "",
          message: "Please check your color"
        },
        required: {
          value: true,
          message: "This field is required"
        }
      },
      size: {
        custom: {
          isValid: (value) => value !== "",
          message: "Please check your size"
        },
        required: {
          value: true,
          message: "This field is required"
        }
      },
      quantity: {
        pattern: {
          value: "^[1-9]*$",
          message: "Please provide valid quantity"
        },
        required: {
          value: true,
          message: "This field is required"
        }
      }
    }
  });
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
      </label>
      <label className={styles.productSize}>
        Size:
        <select
          name="size"
          className={styles.formSelect}
          value={values[name]}
          onChange={handleChange}>
          <option>Please select</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </label>
      <label className={styles.productQuantity}>
        Quantity:
        <input
          name="quantity"
          type="number"
          value={values[name]}
          className={styles.quantityInput}
          onChange={handleChange}
        />
      </label>
      <Button text="add to cart" width="100%" type="submit" />
    </form>
  );
};

AddToCartForm.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default AddToCartForm;
