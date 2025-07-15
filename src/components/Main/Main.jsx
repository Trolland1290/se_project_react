import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
function Main({ weatherData, handleCardClick, itemData }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData?.temp?.F} &deg; F / You may want to wear:
        </p>

        <ul className="cards__list">
          {itemData
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((card) => {
              return (
                <ItemCard
                  key={card._id}
                  card={card}
                  handleCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}
export default Main;
