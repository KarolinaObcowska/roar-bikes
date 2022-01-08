import PropTypes from "prop-types";
import styles from "./Review.module.sass";
import { AiFillStar } from "react-icons/ai";
import Fade from "react-reveal/Fade";

const Review = ({ name, avatar, stars, review }) => {
  const tab = new Array(stars);
  tab.fill(0, 0, stars);

  return (
    <section className={styles.review__wrapper}>
      <div className={styles.review_main}>
        <Fade left>
          <img src={avatar} alt={`${name} 's avatar`} className={styles.review__avatar} />
        </Fade>
        <Fade top>
          <div>
            <h3 className={styles.review__name}>{name}</h3>
            {tab.map((el, id) => {
              return <AiFillStar className={styles.review__star} key={id} />;
            })}
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <div className={styles.review__description_wrapper}>
          <p className={styles.review__description}>{review}</p>
        </div>
      </Fade>
    </section>
  );
};

Review.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired
};

export default Review;
