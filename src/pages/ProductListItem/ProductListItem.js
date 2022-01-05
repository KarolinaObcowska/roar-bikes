/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./productListItem.sass";
import { useState, useEffect } from "react";
import { Photo1, Photo2 } from "../../img/customer-photo";
import Tracker from "../../components/Tracker/Tracker";
import { BsFillCircleFill } from "react-icons/bs";

const ProductListItem = ({ price, name, mainPhoto, data }) => {
  const [images, setImages] = useState(null);

  return (
    <section className="item-container">
      <Tracker name={name} />
      <div className="item__info-container">
        <figure className="item__photo-container">
          <img className="photo" src={mainPhoto} />
          <div className="photo__gallery">
            {data.map((el) => (
              <img className="photo__gallery-item" key={el} src={el} />
            ))}
          </div>
        </figure>
        <div className="item__info">
          <div className="info">
            <h3 className="info__name">{name}</h3>
            <h3 className="info__price">{price}</h3>
          </div>
          <p className="info__color">Color:</p>
          <BsFillCircleFill className="shadow info__color-item" />
          <BsFillCircleFill className="shadow info__color-item" />
          <p className="info__size">Size:</p>
          <select className="info__select">
            <option value="-">Please select</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <p className="info__quantity">Quantity:</p>
          <input type="number" className="info__input" />
          <button className="info__btn">ADD TO CART</button>
        </div>
      </div>
      <div className="details__buttons">
        <button className="details__btn">DESCRIPTION</button>
        <button className="details__btn">SPECIFICATION</button>
      </div>
      <div className="item__details-container">
        <div className="item__details">
          <div className="details__text">
            <h3 className="details__title">IT IS RIGHT FOR YOU IF...</h3>
            <p className="details__description">
              The {name} is long and slack up front, short and snappy out back. We kept the center
              of gravity low and gave the Shuttle an event burlier version of the rear shock linkage
              featured on out long-travel bikes. Finally, we maximized frame and wheel stiffness
              with Suber Boost Plus 157mm spacing. The end result? The Shuttle manages to be
              suprosingly nimble in tight conditions, is supemely confident on fast, chunku
              descents, and can scale ridiculously steep climbs with surefooted calm.
            </p>
            <h3 className="details__title">THE TECH YOU GET</h3>
            <p className="details__description">
              {name} specific electric assist 150 watt drive unit system silently doubles the
              averege riders output, so you ride harder, longer and on trials that prevoiusly seemed
              un-rideable. The Shuttle is so awesome you can even ride with turned off and guess
              what? It still shreds. Hard. Just like our class-leading trial and enduro models. That
              is because it is eassentially a rowdier version of out singletrack loving Mach 5.5
              trial bike wit whole lot of Firebird DBA mixed in.
            </p>
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
