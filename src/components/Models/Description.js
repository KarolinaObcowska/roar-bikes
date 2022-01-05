/* eslint-disable react/prop-types */
import "./models.sass";
import { Link } from "react-router-dom";

const Description = ({ name, description }) => {
  return (
    <div className="models__description models__item">
      <h2 className="description__name">{name}</h2>
      <p className="description__text">{description}</p>
      <Link to={`/product/${name}`} className="description__btn">
        LEARN MORE
      </Link>
    </div>
  );
};

export default Description;
