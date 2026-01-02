import { useState } from "react";

import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectCard] = useState({});

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectCard(card);
  };

  return (
    <div className="app">
      <div className="app__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
      >
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
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="Hot"
              className="modal__label modal__label_type_radio"
            >
              <input type="radio" id="Hot" className="modal__radio-input" /> Hot
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
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        handleCloseClick={closeActiveModal}
      />
    </div>
  );
}

export default App;
