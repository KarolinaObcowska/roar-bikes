/* eslint-disable no-unused-vars */
import styles from "./ProductList.module.sass";
import { Link } from "react-router-dom";
import Layout from "@Layout/Layout/Layout";
import Tracker from "@Elements/Tracker/Tracker";
import SortProductForm from "./SortProductForm/SortProductForm";
import Button from "@Elements/Button/Button";
import products from "../../../assets/data/products";
import { useState } from "react/cjs/react.development";

const ProductList = () => {
  const [items, setItems] = useState(products);
  const [selectedValue, setSelectedValue] = useState({});

  const handleChange = (e) => {
    setSelectedValue({ [e.target.name]: e.target.value });
  };

  const handleFilter = (event) => {
    event.preventDefault();
    if (selectedValue.model === "All") {
      setItems(products);
    } else {
      const filteredProducts = products.filter((prod) => prod.model === selectedValue.model);
      setItems(filteredProducts);
    }
    console.log(selectedValue.model);
    console.log(items);
  };

  return (
    <Layout>
      <Tracker />
      <div className={styles.container}>
        <form className={styles.sortList} onSubmit={handleFilter}>
          <SortProductForm
            handleChange={handleChange}
            labels={["Siamese", "Sphynx", "Bengal", "All"]}
            text="select model"
          />
          <SortProductForm
            handleChange={handleChange}
            labels={["S", "M", "L"]}
            text="select size"
          />
          <Button className={styles.button} text="search" />
        </form>
        <ul className={styles.list}>
          {items.map((el) => (
            <li key={el.id} className={styles.listItem}>
              <div className={styles.product}>
                <div className={styles.productDetails}>
                  <p className={styles.name}>{el.name}</p>
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
