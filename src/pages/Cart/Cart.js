import "./cart.sass";
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import ShopOrder from "./components/Order/Order";
import ShopSummary from "./components/Summary/Summary";
const Cart = () => {
  return (
    <Layout>
      <section className="cart">
        <PageHeader title="cart" />
        <div className="cart-container">
          <ShopSummary />
          <ShopOrder />
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
