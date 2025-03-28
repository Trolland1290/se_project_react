import { useEffect, useState } from "react";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddCardModal from "../AddCardModal/AddCardModal";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const openCreateModal = () => {
    setActiveModal("create");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const closeAllModals = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((res) => {
        const filteredData = filterWeatherData(res);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        {" "}
        <Header
          openCreateModal={openCreateModal}
          weatherData={weatherData}
        />{" "}
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>

      <AddCardModal
        closeAllModals={closeAllModals}
        isOpened={activeModal === "create"}
      />

      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeAllModals}
      />
    </div>
  );
}

export default App;
