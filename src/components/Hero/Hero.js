import "./hero.sass";
import HeroBanner from "../HeroBanner/HeroBanner";
import Slide from "react-reveal/Slide";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <Slide left>
          <div className="wrapper">
            <div className="text-wrapper">
              <h2>NEW MODEL</h2>
              <h1>SIASEME</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
        </Slide>
      </section>
      <HeroBanner />
    </div>
  );
};

export default Hero;
