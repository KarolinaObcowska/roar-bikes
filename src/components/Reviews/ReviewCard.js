/* eslint-disable react/prop-types */
import "./reviews.sass";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({ name, avatar, stars, review }) => {
  const tab = new Array(stars);
  tab.fill(0, 0, stars);

  return (
    <div className="card-wrapper">
      <div className="main">
        <img src={avatar} alt={`${name} 's avatar`} className="avatar" />
        <div>
          <h3 className="name">{name}</h3>
          {tab.map((el, id) => {
            console.log(el);
            return <AiFillStar className="star" key={id} />;
          })}

          {/* <AiFillStar className="star" />
          <AiFillStar className="star" />
          <AiFillStar className="star" />
          <AiFillStar className="star" /> */}
        </div>
      </div>

      <div className="review">
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
