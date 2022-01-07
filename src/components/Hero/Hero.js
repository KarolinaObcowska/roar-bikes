import "./hero.sass";
import Banner from "../Banner/Banner";
import Slide from "react-reveal/Slide";
import ButtonCallToAction from "../ButtonCallToAction/ButtonCallToAction";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <Slide left>
          <div className="hero__container">
            <div className="hero__item">
              <h2 className="hero__subtitle">NEW MODEL</h2>
              <h1 className="hero__title">SIAMESE</h1>
              <ButtonCallToAction location="/product/siamese" title="shop now" />
            </div>
          </div>
        </Slide>
      </section>
      <Banner />
    </div>
  );
};

export default Hero;
