/* eslint-disable react/prop-types */
import "./formInput.sass";

const FormInput = ({ name }) => {
  return (
    <div className="form__group">
      <label className="form__group-title">{name}</label>
      <input className="form__group-input" type="text" />
    </div>
  );
};

export default FormInput;
