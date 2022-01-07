/* eslint-disable react/prop-types */
import "./card.sass";

const Card = ({ icon, description, title }) => {
  return (
    <div className="card">
      <div className="card__container">{icon}</div>
      <h6 className="card__title">{title}</h6>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
