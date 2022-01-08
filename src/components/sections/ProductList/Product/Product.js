import PropTypes from "prop-types";
import styles from "./Product.module.sass";
import Layout from "@Layout/Layout/Layout";
import Tracker from "@Elements/Tracker/Tracker";
import ProductInfo from "@Partials/ProductInfo/ProductInfo";
import ProductDetails from "@Partials/ProductDetails/ProductDetails";

const Product = ({ price, name, mainPhoto, data }) => {
  return (
    <Layout>
      <section className={styles.item_container}>
        <Tracker name={name} />
        <div className={styles.item__info_container}>
          <figure className={styles.item__photo_container}>
            <img className={styles.photo} src={mainPhoto} />
            <div className={styles.photo__gallery}>
              {data.map((el) => (
                <img className={styles.photo__gallery_item} key={el} src={el} />
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

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  mainPhoto: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default Product;
