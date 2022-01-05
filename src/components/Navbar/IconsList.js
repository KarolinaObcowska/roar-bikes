/* eslint-disable react/prop-types */
import "./navbar.sass";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const IconsList = ({ styles }) => {
  return (
    <ul className={styles}>
      <li>
        <Link to="/" className="link">
          <FiSearch className="icon" />
        </Link>
      </li>
      <li>
        <Link to="/cart" className="link">
          <BsCart3 className="icon" />
        </Link>
      </li>
      <li>
        <Link to="/account" className="link">
          <MdOutlineAccountCircle className="icon" />
        </Link>
      </li>
    </ul>
  );
};

export default IconsList;
