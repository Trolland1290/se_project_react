import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { addItem, getItems } from "../../utils/api";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import DeleteModal from "../DeleteModal/DeleteModal";
import { deleteItems } from "../../utils/api";
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, SetCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const openCreateModal = () => {
    setActiveModal("create");
  };
  const openDeleteModal = () => {
    setActiveModal("delete");
  };

  const handleToggleSwitchChange = () => {
    SetCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  // we want to run this when clicking a card
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const closeAllModals = () => {
    setActiveModal("");
  };
  const handleDeleteCard = () => {
    deleteItems(selectedCard._id).then((res) => {
      const filteredData = clothingItems.filter((item) => {
        return item._id !== selectedCard._id;
      });

      setClothingItems(filteredData);
      setActiveModal("");
    });
  };

  const handleAddCard = (data) => {
    console.log(data);
    addItem(data).then((item) => {
      setClothingItems([item, ...clothingItems]);
    });
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((res) => {
        const filteredData = filterWeatherData(res);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems().then((data) => {
      setClothingItems(data);
      console.log(data);
    });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          {" "}
          <Header
            openCreateModal={openCreateModal}
            weatherData={weatherData}
          />{" "}
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  itemData={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleCardClick={handleCardClick}
                  itemData={clothingItems}
                  openCreateModal={openCreateModal}
                />
              }
            />
          </Routes>
          <Footer />
        </div>

        <AddItemModal
          onClose={closeAllModals}
          isOpened={activeModal === "create"}
          handleAddCard={handleAddCard}
          clothingItems={clothingItems}
        />

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeAllModals}
          isOpen={activeModal === "preview"}
          openDeleteModal={openDeleteModal}
        />
        <DeleteModal
          isOpen={activeModal === "delete"}
          onClose={closeAllModals}
          handleDeleteCard={handleDeleteCard}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
