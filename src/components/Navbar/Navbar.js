import "./navbar.sass";
import { useState, useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GiLion } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
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
        <nav>
          <ul>
            <GiLion className="logo" />
            <li>
              <a href="asd" className="logo-text">
                <span>ROAR</span>BIKES
              </a>
            </li>
            <li>
              <a href="asd">HOME</a>
            </li>
            <li>
              <a href="asd">
                PRODUCTS <IoIosArrowDown />{" "}
              </a>
            </li>
            <li>
              <a href="asd">CONTACT</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="asd">
                <FiSearch className="icon" />
              </a>
            </li>
            <li>
              <a href="asd">
                <BsCart3 className="icon" />
              </a>
            </li>
            <li>
              <a href="asd">
                <MdOutlineAccountCircle className="icon" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
