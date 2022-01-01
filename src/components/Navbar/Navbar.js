/* eslint-disable no-unused-vars */
import "./navbar.sass";
import { useState, useEffect } from "react";
import { GiLion } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import DropdownMenu from "./DropdownMenu";
import IconsList from "./IconsList";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div className={navbar ? "active" : "header"}>
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
              <a href="asd">HOME</a>
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
            {isOpen ? <DropdownMenu setIsOpen={setIsOpen} navbar={navbar} /> : null}
            <li>
              <a href="asd">CONTACT</a>
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
