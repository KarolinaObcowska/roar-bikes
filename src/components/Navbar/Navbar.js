import "./navbar.sass";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GiLion } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="header">
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
              <a href="asd">PRODUCTS</a>
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
