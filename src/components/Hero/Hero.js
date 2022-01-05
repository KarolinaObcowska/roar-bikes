import "./hero.sass";
import { Link } from "react-router-dom";
import HeroBanner from "../HeroBanner/HeroBanner";
import Slide from "react-reveal/Slide";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <Slide left>
          <div className="hero__container">
            <div className="hero__item">
              <h2 className="hero__subtitle">NEW MODEL</h2>
              <h1 className="hero__title">SIAMESE</h1>
              <Link to="/product/siamese" className="hero__btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </Slide>
      </section>
      <HeroBanner />
    </div>
  );
};

export default Hero;
