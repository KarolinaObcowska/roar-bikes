import styles from "./CustomerPhoto.module.sass";
import PageTitle from "@Elements/PageTitle/PageTitle";
import { Photo1, Photo2, Photo3, Photo4, Photo5, Photo6 } from "@Images/customer-photo";
import Fade from "react-reveal/Fade";

const CustomerPhoto = () => {
  return (
    <section className={styles.customer_photo}>
      <PageTitle title="customer photo" />
      <div className={styles.customer_photo__container}>
        <div className={styles.photo_container}>
          <Fade left>
            <img src={Photo1} className="photo-container__image" alt="" />
          </Fade>
          <Fade top>
            <img src={Photo2} className={styles.photo_container__image} alt="" />
          </Fade>
          <Fade right>
            <img src={Photo3} className={styles.photo_container__image} alt="" />
          </Fade>
          <Fade left>
            <img src={Photo4} className={styles.photo_container__image} alt="" />
          </Fade>
          <Fade bottom>
            <img src={Photo5} className={styles.photo_container__image} alt="" />
          </Fade>
          <Fade right>
            <img src={Photo6} className={styles.photo_container__image} alt="" />
          </Fade>
        </div>
        <Fade bottom>
          <div className={styles.text_container}>
            <p className={styles.text_container__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default CustomerPhoto;
