// React hooks & Router
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// Styles
import "./App.css";
// Components
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
// Utils
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import {
  coordinates,
  apiKey,
  defaultClothingItems,
} from "../../utils/constants.js";
// Contexts
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: true,
  });
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

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

  const onAddItem = (inputValues) => {
    const newCardData = {
      name: inputValues.name,
      link: inputValues.link,
      weather: inputValues.weatherType,
    };

    setClothingItems([...clothingItems, newCardData]);
    closeActiveModal();
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  console.log({ currentTemperatureUnit });

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="app">
        <div className="app__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          handleCloseClick={closeActiveModal}
          onAddItem={onAddItem}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          handleCloseClick={closeActiveModal}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
