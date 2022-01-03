/* eslint-disable no-unused-vars */
import "./productListItem.sass";
import B1 from "./data/bike1.png";
import B2 from "./data/bike2.png";
import B3 from "./data/bike3.png";
import B4 from "./data/bike4.png";
import B5 from "./data/bike5.png";
import { useState, useEffect } from "react";
import Bike1 from "../../img/bike-1.png";
import Photo1 from "../../img/photo-1.jpg";
import Photo2 from "../../img/photo-2.jpg";
import Tracker from "../../components/Tracker/Tracker";
import { BsFillCircleFill } from "react-icons/bs";

const ProductListItem = () => {
  const [images, setImages] = useState(null);

  return (
    <section className="item-container">
      <Tracker />
      <div className="item__info-container">
        <figure className="item__photo-container">
          <img className="photo" src={Bike1} />
          <div className="photo__gallery">
            <img className="photo__gallery-item" src={B1} />
            <img className="photo__gallery-item" src={B2} />
            <img className="photo__gallery-item" src={B3} />
            <img className="photo__gallery-item" src={B4} />
            <img className="photo__gallery-item" src={B5} />
          </div>
        </figure>
        <div className="item__info">
          <div className="info">
            <h3 className="info__name">SIAMESE</h3>
            <h3 className="info__price">$3400</h3>
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
          <input type="number" className="info__input" value="0" />
          <button className="info__btn">ADD TO CART</button>
        </div>
      </div>
      <div className="item__details-container">
        {/* <button className="details__btn">DESCRIPTION</button>
        <button className="details__btn">SPECIFICATION</button> */}
        <div className="item__details">
          <div className="details__text">
            <h3 className="details__title">asd</h3>
            <p className="details__description">asd</p>
            <h3 className="details__title">asd</h3>
            <p className="details__description">asd</p>
          </div>
          <div className="details__photo">
            <img className="details__photo-item" src={Photo1} />
            <img className="details__photo-item" src={Photo2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListItem;
