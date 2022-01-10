import styles from "./Navbar.module.sass";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiLion } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import NavbarIcon from "../NavbarIcon/NavbarIcon";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setMobileMenu(!mobileMenu);
    const body = document.getElementById("body");
    body.classList.toggle("disableScroll");
  };

  return (
    <div className={styles.header}>
      <header>
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <GiLion className={styles.logo} />
            <li onClick={handleClick}>
              <a className={styles.text}>
                <span>ROAR</span>BIKES <IoIosArrowDown className={styles.mobileIcon} />{" "}
              </a>
            </li>
            <li>
              <Link to="/" className={styles.link}>
                HOME
              </Link>
            </li>
            <li>
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
          <NavbarIcon variant="iconsList" className={styles.iconsList} />
        </nav>
        {/* MOBILE MENU*/}
        {mobileMenu ? (
          <div className={styles.mobile_Menu} onClick={handleClick}>
            <NavbarMobile />
          </div>
        ) : null}
      </header>
    </div>
  );
};

export default Navbar;
