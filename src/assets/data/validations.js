export const productValidations = {
  color: {
    custom: {
      isValid: (value) => value !== "" || value !== " ",
      message: "Please check your color"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  },
  size: {
    custom: {
      isValid: (value) => value !== "" || value !== " ",
      message: "Please check your size"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  },
  quantity: {
    pattern: {
      value: "^[1-9]*$",
      message: "Please provide valid quantity"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  }
};

export const contactValidations = {
  firstname: {
    custom: {
      isValid: (value) => value.toString().length > 3,
      message: "Please provide valid First Name"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  },
  lastname: {
    custom: {
      isValid: (value) => value.toString().length > 3,
      message: "Please provide valid First Name"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  },
  email: {
    custom: {
      isValid: (value) => value.toString().length > 3,
      message: "Please provide valid email"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  },
  message: {
    custom: {
      isValid: (value) => value.length > 35,
      message: "The message must contain at least 35 characters"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  }
};
