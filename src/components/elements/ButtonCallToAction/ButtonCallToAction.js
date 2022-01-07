/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import "./ButtonCallToAction.sass";
import { Link } from "react-router-dom";

const ButtonCallToAction = ({ location, title }) => {
  return (
    <Link to={location} className="btn-cta">
      {title}
    </Link>
  );
};

export default ButtonCallToAction;
