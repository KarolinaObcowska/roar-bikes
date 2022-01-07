/* eslint-disable react/prop-types */
import React from "react";
import "./style.sass";
const FooterCard = ({ titleOne, titleTwo, titleThree }) => {
  return (
    <div className="footer__card">
      <p>{titleOne}</p>
      <p>{titleTwo}</p>
      <p>{titleThree}</p>
    </div>
  );
};

export default FooterCard;
