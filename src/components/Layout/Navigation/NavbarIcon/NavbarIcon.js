/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import styles from "./NavbarIcon.module.sass";

const NavbarIcon = ({ variant }) => {
  return (
    <ul className={styles[variant]}>
      <li>
        <Link to="/cart" className={styles.link}>
          <BsCart3 className={styles.icon} />
        </Link>
      </li>
      <li>
        <Link to="/account" className={styles.link}>
          <MdOutlineAccountCircle className={styles.icon} />
        </Link>
      </li>
    </ul>
  );
};

export default NavbarIcon;
