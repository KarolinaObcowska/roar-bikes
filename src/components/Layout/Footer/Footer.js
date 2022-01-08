import styles from "./Footer.module.sass";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import FooterCard from "@Partials/FooterCard/FooterCard";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className={styles.footer__container}>
        <Fade bottom>
          <FooterCard titles={["Company", "Materials", "Our Process"]} />
          <FooterCard titles={["Setup", "Warranty", "Bike Registration"]} />
          <FooterCard titles={["Contact Us", "Dealer Locator", "Shipping/Returns"]} />
          <address className={styles.footer__address}>
            <div className={styles.footer__social}>
              <FaFacebookF className={styles.footer__socialIcon} />
              <RiInstagramLine className={styles.footer__socialIcon} />
              <BsTwitter className={styles.footer__socialIcon} />
            </div>
            <form className={styles.form}>
              <p className={styles.form__title}>Subscribe to our newsletter</p>
              <input className={styles.form__input} placeholder="E-mail" type="email" />
              <input className={styles.form__submit} type="submit" value="OK" />
            </form>
          </address>
        </Fade>
      </footer>
    </div>
  );
};

export default Footer;
