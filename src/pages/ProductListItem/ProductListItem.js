/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./productListItem.sass";
import { useState } from "react";
import Tracker from "../../components/Tracker/Tracker";
import InfoCard from "../../components/InfoCard/InfoCard";
import CardDetails from "../../components/CardDetails/CardDetails";

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
        <InfoCard name={name} price={price} />
      </div>
      <CardDetails name={name} />
    </section>
  );
};

export default ProductListItem;
