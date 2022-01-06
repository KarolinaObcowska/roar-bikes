/* eslint-disable react/prop-types */
import "./formTextarea.sass";

const FormTextarea = ({ name }) => {
  return (
    <div className="form__group">
      <label className="form__group-title">{name}</label>
      <textarea className="form__group-textarea" />
    </div>
  );
};

export default FormTextarea;
