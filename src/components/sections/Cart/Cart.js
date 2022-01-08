import styles from "./Cart.module.sass";
import Layout from "@Layout/Layout/Layout";
import PageHeader from "@Elements/PageHeader/PageHeader";
import CartOrder from "@Partials/CartOrder/CartOrder";
import CartSummary from "@Partials/CartSummary/CartSummary";
const Cart = () => {
  return (
    <Layout>
      <section className={styles.cart}>
        <PageHeader title="cart" />
        <div className={styles.cart_container}>
          <CartSummary />
          <CartOrder />
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
