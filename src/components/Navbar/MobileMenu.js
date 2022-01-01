import "./navbar.sass";

const MobileMenu = () => {
  return (
    <ul className="mobile-menu-list">
      <li>
        <a>HOME</a>
      </li>
      <li className="product">
        <a>SIAMESE</a>
      </li>
      <li className="product">
        <a>SPHYNX</a>
      </li>
      <li className="product">
        <a href="asd">BENGAL</a>
      </li>
      <li>
        <a>CONTACT</a>
      </li>
    </ul>
  );
};

export default MobileMenu;
