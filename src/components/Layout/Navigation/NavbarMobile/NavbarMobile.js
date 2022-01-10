import styles from "./NavbarMobile.module.sass";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <ul className={styles.mobileList}>
      <li>
        <Link to="/" className={styles.link}>
          HOME
        </Link>
      </li>
      <li className={styles.product}>
        <Link to="/products" className={styles.link}>
          PRODUCTS
        </Link>
      </li>
      <li>
        <Link to="/contact" className={styles.link}>
          CONTACT
        </Link>
      </li>
    </ul>
  );
};

export default NavbarMobile;
