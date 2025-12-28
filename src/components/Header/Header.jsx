function Header() {
  return (
    <Header className="header">
      <img className="header__logo" />
      <p className="header__date-and-location">DATE, LOCATION</p>
      <button className="header__add-cloth-btn">+ Add clothes</button>
      <div className="header__user">
        <p className="header__user_name">NAME</p>
        <img className="header__user_avatar" />
      </div>
    </Header>
  );
}

export default Header;
