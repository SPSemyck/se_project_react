import { Link } from "react-router-dom";
import "./Header.css";
import appLogo from "../../assets/logo.svg";
import userAvatar from "../../assets/avatar-image.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <Link to="/">
        <img src={appLogo} alt="App Logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-cloth-btn"
      >
        + Add clothes
      </button>
      <div className="header__user">
        <Link to="/profile">
          <p className="header__user_name">USER</p>
        </Link>
        <Link to="/profile">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="header__user_avatar"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
