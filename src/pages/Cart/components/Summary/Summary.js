import "./summary.sass";
import Bike1 from "../../../../img/bike-3.png";

const Summary = () => {
  return (
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
  );
};

export default Summary;
