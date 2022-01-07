import "./cart.sass";
import Layout from "@Layout/Layout/Layout";
import PageHeader from "@Elements/PageHeader/PageHeader";
import ShopOrder from "@Partials/Order/Order";
import ShopSummary from "@Partials/Summary/Summary";
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
