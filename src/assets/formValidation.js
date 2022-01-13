export const validateName = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be at least three characters`;
  }
  return null;
};

export const validateEmail = (fieldName, fieldValue) => {
  if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(fieldValue)) {
    return null;
  }
  if (fieldValue.trim() === "") {
    return "Email is required";
  }
  return "Please enter a valid email";
};

export const validateProductSelect = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required.`;
  }
  return null;
};

export const validateProductQuantity = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "" || fieldValue.trim() === "0") {
    return `Please enter a valid quantity`;
  }
  if (/^[1-9]*$/.test(fieldValue)) {
    return null;
  }
  return "Please enter a valid quantity.";
};

export const validateMessage = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return "Cannot send empty messsage.";
  }
  if (fieldValue.trim() < 35) {
    return "The Message must contain at least 35 characters.";
  }
  return null;
};
