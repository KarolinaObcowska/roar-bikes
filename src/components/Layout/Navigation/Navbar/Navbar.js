/* eslint-disable no-unused-vars */
import "./Navbar.sass";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiLion } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import NavbarIcon from "../NavbarIcon/NavbarIcon";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="header">
      <header>
        <nav className="navbar">
          <ul className="navbar-list">
            <GiLion className="logo" />
            <li>
              <a className="logo-text" onClick={() => setMobileMenu(!mobileMenu)}>
                <span>ROAR</span>BIKES <IoIosArrowDown className="mobile-menu-icon" />{" "}
              </a>
            </li>
            <li>
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/products" className="link">
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                CONTACT
              </Link>
            </li>
          </ul>
          <NavbarIcon styles="icons-list" />
        </nav>
        {/* MOBILE MENU*/}
        {mobileMenu ? (
          <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
            <NavbarMobile />
            <NavbarIcon styles="mobile-menu-icons-list" />
          </div>
        ) : null}
      </header>
    </div>
  );
};

export default Navbar;
