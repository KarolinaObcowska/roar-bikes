/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./navbar.sass";
const DropdownMenu = ({ setIsOpen, navbar }) => {
  return (
    <div
      onMouseLeave={() => setIsOpen(false)}
      className={navbar ? "dropdown-menu active" : "dropdown-menu"}>
      <ul onClick={() => setIsOpen(false)}>
        <li>
          <Link to="/product/siamese" className="link">
            SIAMESE
          </Link>
        </li>
        <li>
          <Link to="/product/sphynx" className="link">
            SPHYNX
          </Link>
        </li>
        <li>
          <Link to="/product/bengal" className="link">
            BENGAL
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
