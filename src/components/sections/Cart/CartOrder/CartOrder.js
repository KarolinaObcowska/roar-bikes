import Button from "@Elements/Button/Button";
import styles from "./CartOrder.module.sass";

const CartOrder = () => {
  return (
    <div className={styles.order}>
      <div className={styles.requestContainer}>
        <h4>REQUEST NOTE</h4>
        <textarea className={styles.textarea}></textarea>
      </div>
      <div className={styles.totalsContainer}>
        <h4>CART TOTALS</h4>
        <div className={styles.totals}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.row1}>
                <td>
                  <h4>Shipping</h4>
                </td>
                <td>
                  <p>Lorem ipsum dolor sit amet</p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.row2}>
                <td>
                  <h4>TOTAL</h4>
                </td>
                <td>$3400.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.buttons}>
          <Button text="PROCEED TO CHECKOUT" />
        </div>
      </div>
    </div>
  );
};

export default CartOrder;
