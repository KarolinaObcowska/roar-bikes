/* eslint-disable react/prop-types */
import "./reviews.sass";
import { AiFillStar } from "react-icons/ai";
import Fade from "react-reveal/Fade";
const ReviewCard = ({ name, avatar, stars, review }) => {
  const tab = new Array(stars);
  tab.fill(0, 0, stars);

  return (
    <div className="card-wrapper">
      <div className="main">
        <Fade left>
          <img src={avatar} alt={`${name} 's avatar`} className="avatar" />
        </Fade>
        <Fade top>
          <div>
            <h3 className="name">{name}</h3>
            {tab.map((el, id) => {
              return <AiFillStar className="star" key={id} />;
            })}
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <div className="review">
          <p>{review}</p>
        </div>
      </Fade>
    </div>
  );
};

export default ReviewCard;
