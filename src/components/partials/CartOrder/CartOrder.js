import Button from "@Elements/Button/Button";
import styles from "./CartOrder.module.sass";

const CartOrder = () => {
  return (
    <div className={styles.cart__order}>
      <div className={styles.order__requestContainer}>
        <h4 className={styles.request__title}>REQUEST NOTE</h4>
        <textarea className={styles.request__textarea}></textarea>
      </div>
      <div className={styles.order__totalsContainer}>
        <h4 className={styles.totals__title}>CART TOTALS</h4>
        <div className={styles.totals}>
          <table className={styles.totals__table}>
            <tr className={styles.table__row1}>
              <td>
                <h4>Shipping</h4>
              </td>
              <td>
                <p>Lorem ipsum dolor sit amet</p>
              </td>
            </tr>
            <tr className={styles.table__row2}>
              <td>
                <h4>TOTAL</h4>
              </td>
              <td>$3400.00</td>
            </tr>
          </table>
        </div>
        <div className={styles.totals__buttons}>
          <Button text="PROCEED TO CHECKOUT" />
        </div>
      </div>
    </div>
  );
};

export default CartOrder;
