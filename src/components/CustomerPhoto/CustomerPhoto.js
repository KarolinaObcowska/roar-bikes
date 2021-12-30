import "./customerphoto.sass";
import Photo1 from "../../img/photo-1.jpg";
import Photo2 from "../../img/photo-2.jpg";
import Photo3 from "../../img/photo-3.jpg";
import Photo4 from "../../img/photo-4.jpg";
import Photo5 from "../../img/photo-5.jpg";
import Photo6 from "../../img/photo-6.jpg";
import Fade from "react-reveal/Fade";

const CustomerPhoto = () => {
  return (
    <section className="customer-photo">
      <h3 className="title">CUSTOMER PHOTO</h3>
      <div className="customer-photo-wrapper">
        <div className="photo">
          <Fade left>
            <img src={Photo1} className="image" alt="" />
          </Fade>
          <Fade top>
            <img src={Photo2} className="image" alt="" />
          </Fade>
          <Fade right>
            <img src={Photo3} className="image" alt="" />
          </Fade>
          <Fade left>
            <img src={Photo4} className="image" alt="" />
          </Fade>
          <Fade bottom>
            <img src={Photo5} className="image" alt="" />
          </Fade>
          <Fade right>
            <img src={Photo6} className="image" alt="" />
          </Fade>
        </div>
        <Fade bottom>
          <div className="text-wrapper">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default CustomerPhoto;
