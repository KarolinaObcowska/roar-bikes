/* eslint-disable react/no-unescaped-entities */
import "./models.sass";
import { Bike1, Bike2, Bike3 } from "../../img/bike-main-picks";
import Description from "./Description";
import Slide from "react-reveal/Slide";

const Models = () => {
  return (
    <section className="models">
      <div className="models__title-container">
        <h3 className="models__title">MODELS</h3>
      </div>
      <div className="models__container">
        <div className="models__item--1 models__item">
          <Slide left>
            <figure className="models__figure models__figure--1">
              <img src={Bike1} className="models__photo" alt="Picutre of Siaseme model bike." />
            </figure>
          </Slide>
        </div>
        <Slide right>
          <Description
            className="models__description--1"
            name="SIAMESE"
            description="The Siamese looks a lot like out other Trail and Enduro models because it is - it has
            the same type vof progressive geometry, ultra-capable suspension, and a state-of-the-art
            lightweight carbon-fiber chassis that magically makes you a better rider in the most
            demanding terrain."
          />
        </Slide>
        <Slide left>
          <Description
            className="models__description--2"
            name="SPHYNX"
            description="The Sphinx is the worlds most versatile big-tire machine. Compatibile with almost every
            wheel size available, from 26 and 27.5 Fat to 27.5+ to 29er, the LES Fat is a
            four-season handtrail that can take you from a single track to snow to sand with no
            compromises."
          />
        </Slide>
        <div className="models__item--2 models__item">
          <Slide right>
            <figure className="models__figure--2 models__figure">
              <img src={Bike2} className="models__photo" alt="Picutre of Sphynx model bike." />
            </figure>
          </Slide>
        </div>
        <div className="models__item--3 models__item">
          <Slide left>
            <figure className="models__figure--3 models__figure">
              <img src={Bike3} className="models__photo" alt="Picutre of Siaseme model bike." />
            </figure>
          </Slide>
        </div>
        <Slide right>
          <Description
            className="models__description--3"
            name="BENGAL"
            description="The Bengal breaks the only remaining gravel cycling speed record worth breaking; the
            Speed of Imagination. With unrivaled handling, massive tire clearance, and pro-caliber
            power tranfser, your riding is limited only by the number of adventures you dram of."
          />
        </Slide>
      </div>
    </section>
  );
};

export default Models;
