import "./NavbarMobile.sass";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <ul className="mobile-menu-list">
      <li>
        <Link to="/" className="link">
          HOME
        </Link>
      </li>
      <li className="product">
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
  );
};

export default NavbarMobile;
