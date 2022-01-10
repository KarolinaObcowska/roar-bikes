import styles from "./Cart.module.sass";
import Layout from "@Layout/Layout/Layout";
import PageHeader from "@Elements/PageHeader/PageHeader";
import CartOrder from "./CartOrder/CartOrder";
import CartSummary from "./CartSummary/CartSummary";
import Tracker from "../../elements/Tracker/Tracker";
const Cart = () => {
  return (
    <Layout>
      <section className={styles.cart}>
        <Tracker />
        <PageHeader title="cart" />
        <div className={styles.cartContainer}>
          <CartSummary />
          <CartOrder />
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
