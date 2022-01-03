import "./tracker.sass";
import { BsDot } from "react-icons/bs";

const Tracker = () => {
  return (
    <div className="tracker-container">
      <div className="tracker">
        <p className="tracker__item">
          Home <BsDot /> Products <BsDot /> Siamese
        </p>
      </div>
    </div>
  );
};

export default Tracker;
