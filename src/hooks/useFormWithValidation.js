import { useState } from "react";

export function useFormWithValidation(defaultValues) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation rules for each field
  const validationRules = {
    name: (value) => {
      if (!value || value.trim() === "") {
        return "Name is required";
      }
      return "";
    },
    imageUrl: (value) => {
      if (!value || value.trim() === "") {
        return "Image URL is required";
      }
      try {
        new URL(value);
        return "";
      } catch {
        return "Please enter a valid URL";
      }
    },
    weatherType: (value) => {
      const validTypes = ["hot", "warm", "cold"];
      if (!value || !validTypes.includes(value)) {
        return "Please select a weather type";
      }
      return "";
    },
  };

  function validateField(name, value) {
    const validator = validationRules[name];
    if (validator) {
      return validator(value);
    }
    return "";
  }

  function validateForm(formValues) {
    const newErrors = {};
    let formIsValid = true;

    Object.keys(validationRules).forEach((field) => {
      const error = validateField(field, formValues[field]);
      if (error) {
        newErrors[field] = error;
        formIsValid = false;
      }
    });

    setErrors(newErrors);
    setIsFormValid(formIsValid);
    return formIsValid;
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });

    // Validate field on change
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  }

  function resetForm() {
    setValues(defaultValues);
    setErrors({});
    setIsFormValid(false);
  }

  return {
    values,
    setValues,
    handleChange,
    errors,
    isFormValid,
    validateForm,
    resetForm,
  };
}
