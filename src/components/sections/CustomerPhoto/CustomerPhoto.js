import styles from "./CustomerPhoto.module.sass";
import PageTitle from "@Elements/PageTitle/PageTitle";
import { images } from "@Images/customer-photo";

const CustomerPhoto = () => {
  return (
    <section className={styles.customerPhoto}>
      <PageTitle title="customer photo" />
      <div className={styles.container}>
        <div className={styles.images}>
          {images.map((image) => (
            <img key={image} src={image} className={styles.photo} alt="" />
          ))}
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerPhoto;
