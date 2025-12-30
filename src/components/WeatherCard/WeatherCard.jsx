import "./WeatherCard.css";
import weatherBackdrop from "../../assets/sunny-day.png";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">TEMP</p>
      <img
        src={weatherBackdrop}
        alt="Current Weather"
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
