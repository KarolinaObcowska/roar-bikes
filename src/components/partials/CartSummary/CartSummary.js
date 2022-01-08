import styles from "./CartSummary.module.sass";
import { Bike1 } from "@Images/bike-main-picks";
import Button from "@Elements/Button/Button";

const CartSummary = () => {
  return (
    <div className={styles.cart__summary}>
      <table className={styles.summary__table}>
        <thead className={styles.summary__tableHeader}>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody className={styles.summary__tableBody}>
          <tr>
            <td>
              <figure className={styles.product_container}>
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
      <div className={styles.summary__buttons}>
        <Button text="CLEAR SHOPPING CART" width="fit-content" />
        <Button text="ADD TO CART" width="fit-content" />
      </div>
    </div>
  );
};

export default CartSummary;
