/* eslint-disable react/prop-types */
import React from "react";
import "./footer.sass";
const FooterDetails = ({ titleOne, titleTwo, titleThree }) => {
  return (
    <div className="footer__details">
      <p>{titleOne}</p>
      <p>{titleTwo}</p>
      <p>{titleThree}</p>
    </div>
  );
};

export default FooterDetails;
