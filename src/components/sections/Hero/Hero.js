import styles from "./Hero.module.sass";
import Banner from "@Elements/Banner/Banner";
import Slide from "react-reveal/Slide";
import ButtonCallToAction from "@Elements/ButtonCallToAction/ButtonCallToAction";

const Hero = () => {
  return (
    <div>
      <section className={styles.hero}>
        <Slide left>
          <div className={styles.heroContainer}>
            <div className={styles.item}>
              <h2 className={styles.subtitle}>NEW MODEL</h2>
              <h1 className={styles.title}>SIAMESE</h1>
              <ButtonCallToAction location="/product/1" title="shop now" />
            </div>
          </div>
        </Slide>
      </section>
      <Banner />
    </div>
  );
};

export default Hero;
