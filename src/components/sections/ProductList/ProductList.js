import styles from "./ProductList.module.sass";
import { Link } from "react-router-dom";
import Layout from "@Layout/Layout/Layout";
import Tracker from "@Elements/Tracker/Tracker";
import SortProductForm from "./SortProductForm/SortProductForm";
import Button from "@Elements/Button/Button";
import products from "../../../assets/data/products";

const ProductList = () => {
  return (
    <Layout>
      <Tracker />
      <div className={styles.container}>
        <form className={styles.sortList}>
          <SortProductForm labels={["Siamese", "Sphynx", "Bengal"]} text="select model" />
          <SortProductForm labels={["S", "M", "L"]} text="select size" />
          <Button className={styles.button} text="search" />
        </form>
        <ul className={styles.list}>
          {products.map((el) => (
            <li key={el.id} className={styles.listItem}>
              <div className={styles.product}>
                <div className={styles.productDetails}>
                  <p className={styles.name}>{el.model}</p>
                  <p className={styles.price}>${el.price}</p>
                </div>
                <div className={styles.productPhoto}>
                  <img src={el.mainPhoto} className={styles.photo} />
                </div>
              </div>
              <Link to={`/product/${el.id}`} className={styles.link}>
                <Button text="SHOW MORE" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ProductList;
