import styles from "./CartSummary.module.sass";
import { Bike1 } from "@Images/bike-main-picks";
import Button from "@Elements/Button/Button";

const CartSummary = () => {
  return (
    <div className={styles.summary}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          <tr>
            <td>
              <figure className={styles.product}>
                <img src={Bike1} />
                <figcaption>
                  Siamese <br /> Color: Black <br /> Size: Medium
                </figcaption>
              </figure>
            </td>
            <td>$3400</td>
            <td>1</td>
            <td>$3400</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.buttons}>
        <Button text="CLEAR SHOPPING CART" width="fit-content" />
        <Button text="ADD TO CART" width="fit-content" />
      </div>
    </div>
  );
};

export default CartSummary;
