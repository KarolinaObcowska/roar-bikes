import "./navbar.sass";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <ul>
            <li>
              <a href="asd">
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
                <FiSearch />
              </a>
            </li>
            <li>
              <a href="asd">
                <BsCart3 />
              </a>
            </li>
            <li>
              <a href="asd">
                <MdOutlineAccountCircle />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
