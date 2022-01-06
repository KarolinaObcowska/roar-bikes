import Button from "../../../../components/Button/Button";
import "./order.sass";

const Order = () => {
  return (
    <div className="cart__order">
      <div className="order__request-container">
        <h4 className="request__title">REQUEST NOTE</h4>
        <textarea className="request__textarea"></textarea>
      </div>
      <div className="order__totals-container">
        <h4 className="totals__title">CART TOTALS</h4>
        <div className="totals">
          <table className="totals__table">
            <tr className="table__row--1">
              <td>
                <h4>Shipping</h4>
              </td>
              <td>
                <p>Lorem ipsum dolor sit amet</p>
              </td>
            </tr>
            <tr className="table__row--2">
              <td>
                <h4>TOTAL</h4>
              </td>
              <td>$3400.00</td>
            </tr>
          </table>
        </div>
        <div className="totals__buttons">
          <Button text="PROCEED TO CHECKOUT" />
        </div>
      </div>
    </div>
  );
};

export default Order;
