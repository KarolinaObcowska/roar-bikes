import PropTypes from "prop-types";
import styles from "./Review.module.sass";
import { AiFillStar } from "react-icons/ai";

const Review = ({ name, avatar, stars, review }) => {
  const tab = new Array(stars);
  tab.fill(0, 0, stars);

  return (
    <section className={styles.review}>
      <div className={styles.reviewContainer}>
        <img src={avatar} alt={`${name} 's avatar`} className={styles.avatar} />
        <div>
          <h3 className={styles.name}>{name}</h3>
          {tab.map((el, id) => {
            return <AiFillStar className={styles.star} key={id} />;
          })}
        </div>
      </div>
      <div className={styles.description}>
        <p>{review}</p>
      </div>
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
