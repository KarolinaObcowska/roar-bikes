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
    pattern: {
      value: "[a-z]",
      message: "Please provide valid First Name"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  },
  lastname: {
    pattern: {
      value: "[a-z]",
      message: "Please provide valid First Name"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  },
  email: {
    pattern: {
      value: "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
      message: "Please provide valid email"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  },
  message: {
    custom: {
      value: "^[a-z]{0,10}$",
      message: "The message must contain at least 35 characters"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  }
};

export const accountValidations = {
  name: {
    pattern: {
      value: "[a-z]",
      message: "Please provide valid First Name"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  },
  address1: {
    pattern: {
      value: "[a-zA-Z0-9s,'-]*$",
      message: "Please provide valid address"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  },
  address2: {
    pattern: {
      value: "[a-zA-Z0-9s,'-]*$",
      message: "Please provide valid address"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  },
  email: {
    pattern: {
      value: "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
      message: "Please provide valid email"
    },
    required: {
      value: true,
      message: "This field is required"
    }
  }
};
