/* eslint-disable react/prop-types */
import "./button.sass";

const Button = ({ text, width }) => {
  return (
    <button className="btn" style={{ width: width }}>
      {text}
    </button>
  );
};

export default Button;
