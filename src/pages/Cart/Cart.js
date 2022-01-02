import "./cart.sass";
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
              <tr>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
                <td>asd</td>
              </tr>
            </tbody>
          </table>
          <div className="summary__buttons">
            <button className="summary__buttons-item">CLEAR SHOPPING CART</button>
            <button className="summary__buttons-item">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
