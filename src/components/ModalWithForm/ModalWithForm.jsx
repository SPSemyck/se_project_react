import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New garment</h2>
        <button type="button" className="modal__close-btn">
          Close
        </button>
        <form className="modal__form">
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="modal__input"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              type="url"
              id="imageUrl"
              placeholder="Image URL"
              className="modal__input"
            />
            <fieldset className="modal__radio-btns">
              <legend className="modal__legend">
                Select the weather type:
              </legend>
              <label
                htmlFor="Hot"
                className="modal__label modal__label_type_radio"
              >
                <input type="radio" id="Hot" className="modal__radio-input" />{" "}
                Hot
              </label>
              <label
                htmlFor="Warm"
                className="modal__label modal__label_type_radio"
              >
                <input type="radio" id="Warm" className="modal__radio-input" />{" "}
                Warm
              </label>
              <label
                htmlFor="Cold"
                className="modal__label modal__label_type_radio"
              >
                <input type="radio" id="Cold" className="modal__radio-input" />{" "}
                Cold
              </label>
            </fieldset>
          </label>
          <button type="submit" className="modal__submit_btn">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
