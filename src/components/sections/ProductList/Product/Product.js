import { useParams } from "react-router-dom";
import products from "../../../../assets/data/products";
import styles from "./Product.module.sass";
import Layout from "@Layout/Layout/Layout";
import Tracker from "@Elements/Tracker/Tracker";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductDetails from "./ProductDetails/ProductDetails";

const Product = () => {
  const { id } = useParams();
  const product = products.find((el) => el.id == id);

  return (
    <Layout>
      <section className={styles.product}>
        <Tracker name={product.model} />
        <div className={styles.productContainer}>
          <figure className={styles.images}>
            <img className={styles.photo} src={product.mainPhoto} />
            <div className={styles.photoGallery}>
              {product.photo[0].map((el) => (
                <img className={styles.galleryItem} key={el} src={el} />
              ))}
            </div>
          </figure>
          <ProductInfo name={product.model} price={product.price} />
        </div>
        <ProductDetails name={product.model} />
      </section>
    </Layout>
  );
};

export default Product;
