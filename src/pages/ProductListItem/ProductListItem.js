/* eslint-disable no-unused-vars */
import "./productListItem.sass";
import Photo1 from "../../img/photo-1.jpg";
import Photo2 from "../../img/photo-2.jpg";
import Tracker from "../../components/Tracker/Tracker";

const ProductListItem = () => {
  return (
    <section className="item-container">
      <Tracker />
      <div className="item__info-container">
        <figure className="item__photo-container">
          <img className="photo" />
          <div className="photo__gallery">asd</div>
        </figure>
        <div className="item__info">
          <div className="info">
            <h3 className="info__name">SIAMESE</h3>
            <h3 className="info__price">$3400</h3>
          </div>
          <p className="info__color">Color:</p>
          <p className="info__size">Size:</p>
          <p className="info__quantity">Quantity:</p>
          <button className="info__btn">ADD TO CART</button>
        </div>
      </div>
      <div className="item__details-container">
        {/* <button className="details__btn">DESCRIPTION</button>
        <button className="details__btn">SPECIFICATION</button> */}
        <div className="item__details">
          <div className="details__text">
            <h3 className="details__title"></h3>
            <p className="details__description">asd</p>
            <h3 className="details__title"></h3>
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
