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
  const [selectedModel, setSelectedModel] = useState({});
  const [selectedSize, setSelectedSize] = useState({});

  const handleChangeModel = (e) => {
    setSelectedModel({ [e.target.name]: e.target.value });
  };
  const handleChangeSize = (e) => {
    setSelectedSize({ [e.target.name]: e.target.value });
  };

  const handleFilter = (event) => {
    let filterProducts;
    event.preventDefault();
    if (selectedModel.model === "All" && selectedSize.size === "All") {
      setItems(products);
    } else if (selectedModel.model === "All" && selectedSize.size !== "All") {
      filterProducts = products.filter((prod) => prod.sizes.includes(selectedSize.size));
      setItems(filterProducts);
    } else if (selectedSize.size === "All" && selectedModel.model) {
      filterProducts = products.filter((prod) => prod.model === selectedModel.model);
      setItems(filterProducts);
    } else {
      filterProducts = products.filter(
        (prod) => prod.model === selectedModel.model && prod.sizes.includes(selectedSize.size)
      );
      setItems(filterProducts);
    }
    console.log(selectedModel.model);
    console.log(selectedSize.size);
    console.log(items);
  };

  return (
    <Layout>
      <Tracker />
      <div className={styles.container}>
        <form className={styles.sortList} onSubmit={handleFilter}>
          <div className={styles.wrapper}>
            <SortProductForm
              handleChange={handleChangeModel}
              labels={["Siamese", "Sphynx", "Bengal", "All"]}
              text="select model"
              inputName="model"
            />
            <SortProductForm
              handleChange={handleChangeSize}
              labels={["S", "M", "L", "All"]}
              text="select size"
              inputName="size"
            />
          </div>
          <div className={styles.button}>
            <Button className={styles.button} text="search" />
          </div>
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
