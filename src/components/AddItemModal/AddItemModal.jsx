import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import xIcon from "../../assets/closing-x-icon_grey.svg";

const AddItemModal = ({ isOpen, onAddItem, handleCloseClick }) => {
  const defaultValues = {
    name: "",
    link: "",
    weatherType: "",
  };

  const { values, handleChange } = useForm(defaultValues);
  function handleSubmit(evt) {}

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      handleCloseClick={handleCloseClick}
      handleSubmit={onAddItem}
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
              className="modal__input"
              value={values.name}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              name="link"
              type="url"
              id="imageUrl"
              placeholder="Image URL"
              className="modal__input"
              value={values.link}
              onChange={handleChange}
              required
            />
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
          </label>
        </>
      }
    </ModalWithForm>
  );
};

export default AddItemModal;
