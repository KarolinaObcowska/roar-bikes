/* eslint-disable react/prop-types */
import "./ModelPhoto.sass";

const ModelPhoto = ({ photo }) => {
  return (
    <div className="models__item">
      <figure className="models__figure">
        <img src={photo} className="models__photo" alt="Picutre of Siaseme model bike." />
      </figure>
    </div>
  );
};

export default ModelPhoto;
