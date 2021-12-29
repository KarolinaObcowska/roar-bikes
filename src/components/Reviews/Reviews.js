import Avatar1 from "../../img/avatar1.jpg";
import Avatar2 from "../../img/avatar2.jpg";
import Avatar3 from "../../img/avatar3.jpg";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <section className="reviews">
      <h3 className="title">REVIEWS</h3>
      <div className="reviews-wrapper">
        <ReviewCard
          name="Brandon Short"
          avatar={Avatar1}
          stars={5}
          review="Sed consequat, ante vel hendrerit dapibus, lectus risus condimentum massa, iaculis hendrerit nulla ex non turpis. Donec dapibus consequat tempor. Pellentesque nec velit et dui mattis maximus."
        />
        <ReviewCard
          name="George Valdez"
          avatar={Avatar2}
          stars={3}
          review="Etiam cursus malesuada orci, ullamcorper tristique enim rhoncus in. Phasellus tincidunt sapien id lectus euismod iaculis. Donec porttitor, dolor vel iaculis ultrices, diam nisi placerat ante, nec auctor diam nunc at nibh."
        />
        <ReviewCard
          name="Tyler Smith"
          avatar={Avatar3}
          stars={5}
          review="Duis augue arcu, scelerisque quis viverra sit amet, dignissim nec metus. Aliquam in libero iaculis, faucibus dolor aliquet, tempus arcu. Fusce id lorem eget dui imperdiet ultrices."
        />
      </div>
    </section>
  );
};

export default Reviews;
