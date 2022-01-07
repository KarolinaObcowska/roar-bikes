import { Avatar1, Avatar2, Avatar3 } from "../../img/avatars";
import PageTitle from "../PageTitle/PageTitle";
import Review from "./Review//Review";
import "./reviews.sass";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews__title">
        <PageTitle title="reviews" />
      </div>
      <div className="reviews__container">
        <Review
          name="Brandon Short"
          avatar={Avatar1}
          stars={5}
          review="Sed consequat, ante vel hendrerit dapibus, lectus risus condimentum massa, iaculis hendrerit nulla ex non turpis. Donec dapibus consequat tempor. Pellentesque nec velit et dui mattis maximus."
        />
        <Review
          name="George Valdez"
          avatar={Avatar2}
          stars={3}
          review="Etiam cursus malesuada orci, ullamcorper tristique enim rhoncus in. Phasellus tincidunt sapien id lectus euismod iaculis. Donec porttitor, dolor vel iaculis ultrices, diam nisi placerat ante, nec auctor diam nunc at nibh."
        />
        <Review
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
