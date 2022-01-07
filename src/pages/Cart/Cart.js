import "./cart.sass";
import PageHeader from "../../components/PageHeader/PageHeader";
import ShopOrder from "./components/Order/Order";
import ShopSummary from "./components/Summary/Summary";
const Cart = () => {
  return (
    <section className="cart">
      <PageHeader title="cart" />
      <div className="cart-container">
        <ShopSummary />
        <ShopOrder />
      </div>
    </section>
  );
};

export default Cart;
