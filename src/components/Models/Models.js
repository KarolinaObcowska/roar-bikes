/* eslint-disable react/no-unescaped-entities */
import "./models.sass";
import Bike1 from "../../img/bike-1.png";
import Bike2 from "../../img/bike-2.png";
import Bike3 from "../../img/bike-3.png";
import Description from "./Description";

const Models = () => {
  const elements = document.querySelectorAll(".photo");
  console.log(elements.length);
  return (
    <section className="models">
      <div className="title-wrapper">
        <h3>MODELS</h3>
      </div>
      <div className="models-wrapper">
        <div className="item-1 item">
          <figure className="item-figure-1">
            <img
              src={Bike1}
              className="photo figure-animation"
              alt="Picutre of Siaseme model bike."
            />
          </figure>
        </div>
        <Description
          name="SIAMESE"
          description="The Siamese looks a lot like out other Trail and Enduro models because it is - it has
            the same type vof progressive geometry, ultra-capable suspension, and a state-of-the-art
            lightweight carbon-fiber chassis that magically makes you a better rider in the most
            demanding terrain."
        />
        <Description
          name="SPHYNX"
          description="The Sphinx is the worlds most versatile big-tire machine. Compatibile with almost every
            wheel size available, from 26 and 27.5 Fat to 27.5+ to 29er, the LES Fat is a
            four-season handtrail that can take you from a single track to snow to sand with no
            compromises."
        />
        <div className="item-4 item">
          <figure className="item-figure-2 figure">
            <img src={Bike2} className="photo" alt="Picutre of Sphynx model bike." />
          </figure>
        </div>
        <div className="item-5 item">
          <figure className="item-figure-3 figure">
            <img src={Bike3} className="photo" alt="Picutre of Siaseme model bike." />
          </figure>
        </div>
        <Description
          name="BENGAL"
          description="The Bengal breaks the only remaining gravel cycling speed record worth breaking; the
            Speed of Imagination. With unrivaled handling, massive tire clearance, and pro-caliber
            power tranfser, your riding is limited only by the number of adventures you dram of."
        />
      </div>
    </section>
  );
};

export default Models;
