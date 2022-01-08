import PropTypes from "prop-types";
import styles from "./Product.module.sass";
import Layout from "@Layout/Layout/Layout";
import Tracker from "@Elements/Tracker/Tracker";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductDetails from "./ProductDetails/ProductDetails";

const Product = ({ price, name, mainPhoto, data }) => {
  return (
    <Layout>
      <section className={styles.product}>
        <Tracker name={name} />
        <div className={styles.productContainer}>
          <figure className={styles.images}>
            <img className={styles.photo} src={mainPhoto} />
            <div className={styles.photoGallery}>
              {data.map((el) => (
                <img className={styles.galleryItem} key={el} src={el} />
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
