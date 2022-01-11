import styles from "./ProductList.module.sass";
import Layout from "@Layout/Layout/Layout";
import Tracker from "@Elements/Tracker/Tracker";
import ProductListItem from "./ProductListItem/ProductListItem";
import { Bike1, Bike2, Bike3 } from "@Images/bike-main-picks";

const ProductList = () => {
  return (
    <Layout>
      <Tracker />
      <div className={styles.container}>
        <div className={styles.sortList}>
          <select></select>
        </div>
        <ul className={styles.list}>
          <ProductListItem name="Siamese" price={3400} photo={Bike1} />
          <ProductListItem name="Siamese" price={3400} photo={Bike1} />
          <ProductListItem name="Siamese" price={3400} photo={Bike1} />
          <ProductListItem name="Siamese" price={3400} photo={Bike1} />
          <ProductListItem name="Siamese" price={3400} photo={Bike1} />
          <ProductListItem name="Sphynx" price={2700} photo={Bike2} />
          <ProductListItem name="Bengal" price={3100} photo={Bike3} />
        </ul>
      </div>
    </Layout>
  );
};

export default ProductList;
