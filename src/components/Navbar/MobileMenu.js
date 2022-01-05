import "./navbar.sass";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <ul className="mobile-menu-list">
      <li>
        <Link to="/" className="link">
          HOME
        </Link>
      </li>
      <li className="product">
        <Link to="/product/siamese" className="link">
          SIAMESE
        </Link>
      </li>
      <li className="product">
        <Link to="/product/sphynx" className="link">
          SPHYNX
        </Link>
      </li>
      <li className="product">
        <Link to="/product/bengal" className="link">
          BENGAL
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

export default MobileMenu;
