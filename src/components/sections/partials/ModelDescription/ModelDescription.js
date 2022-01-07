/* eslint-disable react/prop-types */
import "./modelDescription.sass";
import ButtonCallToAction from "@Elements/ButtonCallToAction/ButtonCallToAction";

const ModelDescription = ({ name, description }) => {
  return (
    <div className="models__description models__item">
      <h2 className="description__name">{name}</h2>
      <p className="description__text">{description}</p>
      <ButtonCallToAction location={`/product/${name}`} title="learn more" />
    </div>
  );
};

export default ModelDescription;
