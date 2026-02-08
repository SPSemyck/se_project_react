import { useState } from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, handleCloseClick }) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const defaultValues = {
    name: "",
    imageUrl: "",
    weatherType: "",
  };

  // Form hook with validation
  const { values, handleChange, errors, isFormValid, validateForm, resetForm } =
    useFormWithValidation(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    setHasSubmitted(true);
    if (validateForm(values)) {
      onAddItem(values);
      resetForm();
      setHasSubmitted(false);
    }
  }

  // HTML return
  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      {
        <>
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Name"
              className={`modal__input ${
                hasSubmitted && errors.name ? "modal__input_is-invalid" : ""
              }`}
              value={values.name}
              onChange={handleChange}
            />
            {hasSubmitted && errors.name && (
              <span className="modal__error">{errors.name}</span>
            )}
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              name="imageUrl"
              type="url"
              id="imageUrl"
              placeholder="Image URL"
              className={`modal__input ${
                hasSubmitted && errors.imageUrl ? "modal__input_is-invalid" : ""
              }`}
              value={values.imageUrl}
              onChange={handleChange}
            />
            {hasSubmitted && errors.imageUrl && (
              <span className="modal__error">{errors.imageUrl}</span>
            )}
            <fieldset className="modal__radio-btns">
              <legend className="modal__legend">
                Select the weather type:
              </legend>
              <label
                htmlFor="hot"
                className="modal__label modal__label_type_radio"
              >
                <input
                  name="weatherType"
                  type="radio"
                  id="hot"
                  className="modal__radio-input"
                  value="hot"
                  onChange={handleChange}
                />{" "}
                Hot
              </label>
              <label
                htmlFor="warm"
                className="modal__label modal__label_type_radio"
              >
                <input
                  name="weatherType"
                  type="radio"
                  id="warm"
                  className="modal__radio-input"
                  value="warm"
                  onChange={handleChange}
                />{" "}
                Warm
              </label>
              <label
                htmlFor="cold"
                className="modal__label modal__label_type_radio"
              >
                <input
                  name="weatherType"
                  type="radio"
                  id="cold"
                  className="modal__radio-input"
                  value="cold"
                  onChange={handleChange}
                />{" "}
                Cold
              </label>
            </fieldset>
            {hasSubmitted && errors.weatherType && (
              <span className="modal__error">{errors.weatherType}</span>
            )}
          </label>
        </>
      }
    </ModalWithForm>
  );
};

export default AddItemModal;
