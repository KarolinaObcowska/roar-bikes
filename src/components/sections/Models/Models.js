/* eslint-disable react/no-unescaped-entities */
import "./Models.sass";
import { Bike1, Bike2, Bike3 } from "@Images/bike-main-picks";
import Slide from "react-reveal/Slide";
import ModelPhoto from "@Partials/ModelPhoto/ModelPhoto";
import ModelDescription from "@Partials/ModelDescription/ModelDescription";
import PageTitle from "@Elements/PageTitle/PageTitle";

const Models = () => {
  return (
    <section className="models">
      <PageTitle title="models" />
      <div className="models__container">
        <Slide left>
          <ModelPhoto photo={Bike1} />
        </Slide>
        <Slide right>
          <ModelDescription
            name="SIAMESE"
            description="The Siamese looks a lot like out other Trail and Enduro models because it is - it has
            the same type vof progressive geometry, ultra-capable suspension, and a state-of-the-art
            lightweight carbon-fiber chassis that magically makes you a better rider in the most
            demanding terrain."
          />
        </Slide>
        <Slide right>
          <ModelPhoto photo={Bike2} />
        </Slide>
        <Slide left>
          <ModelDescription
            name="SPHYNX"
            description="The Sphinx is the worlds most versatile big-tire machine. Compatibile with almost every
            wheel size available, from 26 and 27.5 Fat to 27.5+ to 29er, the LES Fat is a
            four-season handtrail that can take you from a single track to snow to sand with no
            compromises."
          />
        </Slide>
        <Slide left>
          <ModelPhoto photo={Bike3} />
        </Slide>
        <Slide right>
          <ModelDescription
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
