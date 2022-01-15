/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import styles from "./Models.module.sass";
import products from "../../../assets/data/products";
import ModelPhoto from "./ModelPhoto/ModelPhoto";
import ModelDescription from "./ModelDescription/ModelDescription";
import PageTitle from "@Elements/PageTitle/PageTitle";

const Models = () => {
  const models = [products[0], products[3], products[6]];
  return (
    <section className={styles.models}>
      <PageTitle title="models" />
      <div className={styles.modelsContainer}>
        {models.map((el) => (
          <div key={el.id}>
            <ModelPhoto photo={el.mainPhoto} />
            <ModelDescription model={el.model} description={el.description} id={el.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Models;
