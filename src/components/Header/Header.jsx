import "./Header.css";
import appLogo from "../../assets/logo.svg";
import userAvatar from "../../assets/avatar-image.png";

function Header() {
  return (
    <Header className="header">
      <img src={appLogo} alt="App Logo" className="header__logo" />
      <p className="header__date-and-location">DATE, LOCATION</p>
      <button className="header__add-cloth-btn">+ Add clothes</button>
      <div className="header__user">
        <p className="header__user_name">NAME</p>
        <img
          src={userAvatar}
          alt="User Avatar"
          className="header__user_avatar"
        />
      </div>
    </Header>
  );
}

export default Header;
