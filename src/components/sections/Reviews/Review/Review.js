/* eslint-disable react/prop-types */
import "./review.sass";
import { AiFillStar } from "react-icons/ai";
import Fade from "react-reveal/Fade";

const Review = ({ name, avatar, stars, review }) => {
  const tab = new Array(stars);
  tab.fill(0, 0, stars);

  return (
    <section className="review__wrapper">
      <div className="review--main">
        <Fade left>
          <img src={avatar} alt={`${name} 's avatar`} className="review__avatar" />
        </Fade>
        <Fade top>
          <div>
            <h3 className="review__name">{name}</h3>
            {tab.map((el, id) => {
              return <AiFillStar className="review__star" key={id} />;
            })}
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <div className="review__description-wrapper">
          <p className="review__description">{review}</p>
        </div>
      </Fade>
    </section>
  );
};

export default Review;
