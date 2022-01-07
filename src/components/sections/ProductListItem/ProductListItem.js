/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./productListItem.sass";
import Layout from "@Layout/Layout/Layout";
import Tracker from "@Elements/Tracker/Tracker";
import CartInfo from "@Partials/CartInfo/CartInfo";
import CartDetails from "@Partials/CartDetails/CartDetails";

const ProductListItem = ({ price, name, mainPhoto, data }) => {
  return (
    <Layout>
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
          <CartInfo name={name} price={price} />
        </div>
        <CartDetails name={name} />
      </section>
    </Layout>
  );
};

export default ProductListItem;
