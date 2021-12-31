/* eslint-disable react/prop-types */
import "./models.sass";

const Description = ({ name, description }) => {
  return (
    <div className="models__description models__item">
      <h2 className="description__name">{name}</h2>
      <p className="description__text">{description}</p>
      <button className="description__btn">LEARN MORE</button>
    </div>
  );
};

export default Description;
