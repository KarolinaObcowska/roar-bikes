/* eslint-disable react/prop-types */
import "./models.sass";

const Description = ({ name, description }) => {
  return (
    <div className="item-description item">
      <h2>{name}</h2>
      <p>{description}</p>
      <button>LEARN MORE</button>
    </div>
  );
};

export default Description;
