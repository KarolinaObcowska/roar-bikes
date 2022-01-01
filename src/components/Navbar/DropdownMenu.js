/* eslint-disable react/prop-types */
import React from "react";
import "./navbar.sass";
const DropdownMenu = ({ setIsOpen, navbar }) => {
  return (
    <div
      onMouseLeave={() => setIsOpen(false)}
      className={navbar ? "dropdown-menu active" : "dropdown-menu"}>
      <ul onClick={() => setIsOpen(false)}>
        <li>
          <a>SIAMESE</a>
        </li>
        <li>
          <a>SPHYNX</a>
        </li>
        <li>
          <a>BENGAL</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
