import { useParams } from "react-router-dom";
import products from "../../../../assets/data/products";
import { Photo1, Photo2 } from "@Images/customer-photo";
import styles from "./Product.module.sass";
import Layout from "@Layout/Layout/Layout";
import Tracker from "@Elements/Tracker/Tracker";
import AddToCartForm from "./AddToCartForm/AddToCartForm";
import Button from "@Elements/Button/Button";

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
          <AddToCartForm name={product.name} price={product.price} />
        </div>
        <div className={styles.buttons}>
          <Button text="DESCRIPTION" variant="rounded-black" />
          <Button text="specification" variant="rounded-white" />
        </div>
        <div className={styles.details}>
          <div className={styles.detailsContainer}>
            <div className={styles.text}>
              <h3 className={styles.title}>IT IS RIGHT FOR YOU IF...</h3>
              <p className={styles.description}>
                The {product.model} is long and slack up front, short and snappy out back. We kept
                the center of gravity low and gave the Shuttle an event burlier version of the rear
                shock linkage featured on out long-travel bikes. Finally, we maximized frame and
                wheel stiffness with Suber Boost Plus 157mm spacing. The end result? The Shuttle
                manages to be suprosingly nimble in tight conditions, is supemely confident on fast,
                chunku descents, and can scale ridiculously steep climbs with surefooted calm.
              </p>
              <h3 className={styles.title}>THE TECH YOU GET</h3>
              <p className={styles.description}>
                {product.model} specific electric assist 150 watt drive unit system silently doubles
                the averege riders output, so you ride harder, longer and on trials that prevoiusly
                seemed un-rideable. The Shuttle is so awesome you can even ride with turned off and
                guess what? It still shreds. Hard. Just like our class-leading trial and enduro
                models. That is because it is eassentially a rowdier version of out singletrack
                loving Mach 5.5 trial bike wit whole lot of Firebird DBA mixed in.
              </p>
            </div>
            <div className={styles.images}>
              <img className={styles.photo} src={Photo1} />
              <img className={styles.photo} src={Photo2} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
