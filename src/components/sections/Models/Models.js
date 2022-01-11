/* eslint-disable react/no-unescaped-entities */
import styles from "./Models.module.sass";
import models from "../../../assets/data/models";
import ModelPhoto from "./ModelPhoto/ModelPhoto";
import ModelDescription from "./ModelDescription/ModelDescription";
import PageTitle from "@Elements/PageTitle/PageTitle";

const Models = () => {
  return (
    <section className={styles.models}>
      <PageTitle title="models" />
      <div className={styles.modelsContainer}>
        {models.map((el) => (
          <>
            <ModelPhoto photo={el.photo} />
            <ModelDescription model={el.model} description={el.description} />
          </>
        ))}
      </div>
    </section>
  );
};

export default Models;
