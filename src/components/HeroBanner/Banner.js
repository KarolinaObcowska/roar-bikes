/* eslint-disable react/prop-types */
import "./HeroBanner";

const Banner = ({ icon, description, text }) => {
  return (
    <div className="card">
      <div className="card-wrapper">{icon}</div>
      <h6>{description}</h6>
      <p>{text}</p>
    </div>
  );
};

export default Banner;
