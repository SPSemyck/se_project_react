import "./Header.css";
import appLogo from "../../assets/logo.svg";
import userAvatar from "../../assets/avatar-image.png";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img src={appLogo} alt="App Logo" className="header__logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-cloth-btn"
      >
        + Add clothes
      </button>
      <div className="header__user">
        <p className="header__user_name">USER</p>
        <img
          src={userAvatar}
          alt="User Avatar"
          className="header__user_avatar"
        />
      </div>
    </header>
  );
}

export default Header;
