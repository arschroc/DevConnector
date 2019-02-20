const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  //Set data to an empty string if it is emtpy
  data.text = !isEmpty(data.text) ? data.text : "";

  //Check if post text is valid length
  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post must be between 10 and 300 characters";
  }

  //Check if empty
  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
