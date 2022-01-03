import "./cart.sass";
import ShopOrder from "./components/Order/Order";
import ShopSummary from "./components/Summary/Summary";
const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__banner-container">
        <div className="banner">
          <h2 className="banner__title">CART</h2>
        </div>
      </div>
      <div className="cart-container">
        <ShopSummary />
        <ShopOrder />
      </div>
    </div>
  );
};

export default Cart;
