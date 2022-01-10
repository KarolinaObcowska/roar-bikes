/* eslint-disable react/no-unescaped-entities */
import styles from "./Models.module.sass";
import { useState, useEffect } from "react";
import { Bike1, Bike2, Bike3 } from "@Images/bike-main-picks";
import ModelPhoto from "./ModelPhoto/ModelPhoto";
import ModelDescription from "./ModelDescription/ModelDescription";
import PageTitle from "@Elements/PageTitle/PageTitle";

const Models = () => {
  const [windowWidth, setWindowWidth] = useState();

  function getWindowWidth() {
    const { innerWidth: width } = window;
    return width;
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.models}>
      <PageTitle title="models" />
      <div className={styles.modelsContainer}>
        <ModelPhoto photo={Bike1} />
        <ModelDescription
          name="SIAMESE"
          description="The Siamese looks a lot like out other Trail and Enduro models because it is - it has
            the same type vof progressive geometry, ultra-capable suspension, and a state-of-the-art
            lightweight carbon-fiber chassis that magically makes you a better rider in the most
            demanding terrain."
        />
        {windowWidth <= 768 ? (
          <>
            <ModelPhoto photo={Bike2} />
            <ModelDescription
              name="SPHYNX"
              description="The Sphinx is the worlds most versatile big-tire machine. Compatibile with almost every
            wheel size available, from 26 and 27.5 Fat to 27.5+ to 29er, the LES Fat is a
            four-season handtrail that can take you from a single track to snow to sand with no
            compromises."
            />
          </>
        ) : (
          <>
            <ModelDescription
              name="SPHYNX"
              description="The Sphinx is the worlds most versatile big-tire machine. Compatibile with almost every
            wheel size available, from 26 and 27.5 Fat to 27.5+ to 29er, the LES Fat is a
            four-season handtrail that can take you from a single track to snow to sand with no
            compromises."
            />
            <ModelPhoto photo={Bike2} />
          </>
        )}
        <ModelPhoto photo={Bike3} />
        <ModelDescription
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
