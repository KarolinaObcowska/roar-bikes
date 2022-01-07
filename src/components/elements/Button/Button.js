/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import "./Button.sass";

const Button = ({ text, width, variant }) => {
  return (
    <button className={variant} style={{ width: width }}>
      {text}
    </button>
  );
};

export default Button;
