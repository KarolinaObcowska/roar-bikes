/* eslint-disable react/prop-types */
import "./HeroBanner";

const Banner = ({ icon, description, title }) => {
  return (
    <div className="card">
      <div className="card__container">{icon}</div>
      <h6 className="card__title">{title}</h6>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Banner;
