/* eslint-disable react/prop-types */
import "./tracker.sass";
import { BsDot } from "react-icons/bs";

const Tracker = ({ name }) => {
  return (
    <div className="tracker-container">
      <div className="tracker">
        <p className="tracker__item">
          Home <BsDot /> Products <BsDot /> {name}
        </p>
      </div>
    </div>
  );
};

export default Tracker;
