/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import PropTypes from "prop-types";
import Button from "@Elements/Button/Button";
import styles from "./ProductInfo.module.sass";
import Modal from "@Elements/Modal/Modal";

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
  const [submitting, setSubmitting] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    if (
      formData.size === "" ||
      formData.quantity === "" ||
      formData.quantity === "0" ||
      formData.color === ""
    ) {
      setModal(true);
    } else {
      setModal(false);
      alert("bleble");
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
      {modal && (
        <Modal open={modal} close={toggle}>
          <p>Fill in all the fields of the form.</p>
        </Modal>
      )}
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
