/* eslint-disable react/prop-types */
import { BsFillCircleFill } from "react-icons/bs";
import Button from "@Elements/Button/Button";
import "./cartInfo.sass";

const CartInfo = ({ name, price }) => {
  return (
    <div className="item__info">
      <div className="info">
        <h3 className="info__name">{name}</h3>
        <h3 className="info__price">{price}</h3>
      </div>
      <p className="info__color">Color:</p>
      <BsFillCircleFill className="info__color-item" />
      <BsFillCircleFill className="info__color-item" />
      <p className="info__size">Size:</p>
      <select className="info__select">
        <option value="-">Please select</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
      <p className="info__quantity">Quantity:</p>
      <input type="number" className="info__input" />
      <Button text="add to cart" width="90%" />
    </div>
  );
};

export default CartInfo;
