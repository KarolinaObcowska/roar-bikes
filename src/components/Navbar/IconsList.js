/* eslint-disable react/prop-types */
import "./navbar.sass";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const IconsList = ({ styles }) => {
  return (
    <ul className={styles}>
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
  );
};

export default IconsList;
