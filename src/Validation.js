

const validation = (name, value) => {
  let errors = {};

  if (name === "username") {
    if (value === "") {
      errors.username = "This field is required";
    }
  }

  if (name === "password") {
    if (value === "") {
      errors.password = "This field is required";
    }
  }

  return errors;
};

export default validation;