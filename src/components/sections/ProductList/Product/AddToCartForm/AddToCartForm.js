/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import Button from "@Elements/Button/Button";
import styles from "./AddToCartForm.module.sass";
import { ModalContext } from "../../../../../assets/context/modalContext";

const AddToCartForm = ({ name, price }) => {
  const { handleModal } = useContext(ModalContext);
  const [values, setValues] = useState({
    color: "",
    size: "",
    quantity: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.color === "" ||
      values.size === "" ||
      values.quantity === "" ||
      values.quantity === "0"
    ) {
      handleModal("Fill in all the fields of the form.");
    } else {
      handleModal("Product has been added to cart.");
      event.target.reset();
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
