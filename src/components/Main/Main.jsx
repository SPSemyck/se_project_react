import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";

function Main() {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">Today is TEMP / You may want to wear:</p>
        {/* TODO - add cards */}
      </section>
    </main>
  );
}

export default Main;
