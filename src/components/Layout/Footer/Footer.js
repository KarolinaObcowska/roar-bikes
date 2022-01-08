import styles from "./Footer.module.sass";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import FooterCard from "./FooterCard/FooterCard";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className={styles.footerContainer}>
        <Fade bottom>
          <FooterCard titles={["Company", "Materials", "Our Process"]} />
          <FooterCard titles={["Setup", "Warranty", "Bike Registration"]} />
          <FooterCard titles={["Contact Us", "Dealer Locator", "Shipping/Returns"]} />
          <address className={styles.address}>
            <div className={styles.socials}>
              <FaFacebookF className={styles.socialIcon} />
              <RiInstagramLine className={styles.socialIcon} />
              <BsTwitter className={styles.socialIcon} />
            </div>
            <form className={styles.form}>
              <p className={styles.title}>Subscribe to our newsletter</p>
              <input className={styles.input} placeholder="E-mail" type="email" />
              <input className={styles.submit} type="submit" value="OK" />
            </form>
          </address>
        </Fade>
      </footer>
    </div>
  );
};

export default Footer;
