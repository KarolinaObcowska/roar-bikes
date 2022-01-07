/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Product.sass";
import Layout from "@Layout/Layout/Layout";
import Tracker from "@Elements/Tracker/Tracker";
import ProductInfo from "@Partials/ProductInfo/ProductInfo";
import ProductDetails from "@Partials/ProductDetails/ProductDetails";

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
          <ProductInfo name={name} price={price} />
        </div>
        <ProductDetails name={name} />
      </section>
    </Layout>
  );
};

export default ProductListItem;
