import "./hero.sass";
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
              <h1 className="hero__title">SIASEME</h1>
              <button className="hero__btn">SHOP NOW</button>
            </div>
          </div>
        </Slide>
      </section>
      <HeroBanner />
    </div>
  );
};

export default Hero;
