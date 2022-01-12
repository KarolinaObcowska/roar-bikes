/* eslint-disable no-unused-vars */
import { useReducer, useState, useContext } from "react";
import PropTypes from "prop-types";
import Button from "@Elements/Button/Button";
import styles from "./ProductInfo.module.sass";
import { ModalContext } from "../../../../../assets/context/modalContext";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      size: "",
      quantity: "",
      color: ""
    };
  }
  return {
    ...state,
    [event.name]: event.value
  };
};

const ProductInfo = ({ name, price }) => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const { handleModal } = useContext(ModalContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.size === "" ||
      formData.quantity === "" ||
      formData.quantity === "0" ||
      formData.color === ""
    ) {
      handleModal("Fill in all the fields of the form.");
    } else {
      handleModal("Product has been added to your cart.");
      setFormData({
        reset: true
      });
    }
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value
    });
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
          value={formData.color || ""}
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
          value={formData.size || ""}
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
          value={formData.quantity || ""}
          className={styles.quantityInput}
          onChange={handleChange}
        />
      </label>
      <Button text="add to cart" width="100%" type="submit" />
    </form>
  );
};

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductInfo;
