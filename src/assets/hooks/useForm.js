/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { ModalContext } from "../context/modalContext";

const useForm = (options) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const { handleModal } = useContext(ModalContext);

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors = {};
      for (const key in validations) {
        const value = values[key];
        const validation = validations[key];

        //REQUIRED
        const required = validation?.required;
        if (required?.value && !value) {
          valid = false;
          newErrors[key] = required.message;
        }
        //PATTERN
        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }
        // CUSTOM
        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      } else {
        setErrors({});
        handleModal("Form has been sent");
        event.target.reset();
        setValues({});
      }
    }
  };
  return { values, errors, handleChange, handleSubmit };
};

export default useForm;
