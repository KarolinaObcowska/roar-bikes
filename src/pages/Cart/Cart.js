import "./cart.sass";
import Bike1 from "../../img/bike-3.png";
const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__banner-container">
        <div className="banner">
          <h2 className="banner__title">CART</h2>
        </div>
      </div>
      <div className="cart-container">
        <div className="cart__summary">
          <table className="summary__table">
            <thead className="summary__table-header">
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody className="summary__table-body">
              <tr className="table__row--2">
                <td>
                  <figure className="product-container">
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
          <div className="summary__buttons">
            <button className="summary__buttons-item">CLEAR SHOPPING CART</button>
            <button className="summary__buttons-item">ADD TO CART</button>
          </div>
        </div>
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
              <button className="totals__buttons-item">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
