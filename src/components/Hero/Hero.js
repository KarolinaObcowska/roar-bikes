import "./hero.sass";
import HeroBanner from "../HeroBanner/HeroBanner";
const Hero = () => {
  return (
    <div>
      <section>
        <div>
          <h2>NEW MODEL</h2>
          <h1>SIASEME</h1>
          <button>SHOP NOW</button>
        </div>
      </section>
      <HeroBanner />
    </div>
  );
};

export default Hero;
