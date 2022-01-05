/* eslint-disable no-unused-vars */
import "./navbar.sass";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiLion } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import DropdownMenu from "./DropdownMenu";
import IconsList from "./IconsList";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
              <a
                className="dropdown-menu-link"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}>
                PRODUCTS <IoIosArrowDown />{" "}
              </a>
            </li>
            {isOpen ? <DropdownMenu setIsOpen={setIsOpen} /> : null}
            <li>
              <Link to="/contact" className="link">
                CONTACT
              </Link>
            </li>
          </ul>
          <IconsList styles="icons-list" />
        </nav>
        {/* MOBILE MENU*/}
        {mobileMenu ? (
          <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
            <MobileMenu />
            <IconsList styles="mobile-menu-icons-list" />
          </div>
        ) : null}
      </header>
    </div>
  );
};

export default Navbar;
