/* eslint-disable react/prop-types */
import { Photo1, Photo2 } from "@Images/customer-photo";
import Button from "@Elements/Button/Button";
import "./ProductDetails.sass";

const ProductDetails = ({ name }) => {
  return (
    <>
      <div className="details__buttons">
        <Button text="DESCRIPTION" variant="rounded-black" />
        <Button text="specification" variant="rounded-white" />
      </div>
      <div className="item__details-container">
        <div className="item__details">
          <div className="details__text">
            <h3 className="details__title">IT IS RIGHT FOR YOU IF...</h3>
            <p className="details__description">
              The {name} is long and slack up front, short and snappy out back. We kept the center
              of gravity low and gave the Shuttle an event burlier version of the rear shock linkage
              featured on out long-travel bikes. Finally, we maximized frame and wheel stiffness
              with Suber Boost Plus 157mm spacing. The end result? The Shuttle manages to be
              suprosingly nimble in tight conditions, is supemely confident on fast, chunku
              descents, and can scale ridiculously steep climbs with surefooted calm.
            </p>
            <h3 className="details__title">THE TECH YOU GET</h3>
            <p className="details__description">
              {name} specific electric assist 150 watt drive unit system silently doubles the
              averege riders output, so you ride harder, longer and on trials that prevoiusly seemed
              un-rideable. The Shuttle is so awesome you can even ride with turned off and guess
              what? It still shreds. Hard. Just like our class-leading trial and enduro models. That
              is because it is eassentially a rowdier version of out singletrack loving Mach 5.5
              trial bike wit whole lot of Firebird DBA mixed in.
            </p>
          </div>
          <div className="details__photo">
            <img className="details__photo-item" src={Photo1} />
            <img className="details__photo-item" src={Photo2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
