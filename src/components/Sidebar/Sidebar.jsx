import "./Sidebar.css";

import userAvatar from "../../assets/avatar-image.png";

export default function Sidebar() {
  const userName = "Terrance Tegegne";

  return (
    <aside className="sidebar">
      <div className="sidebar__user">
        <img
          src={userAvatar}
          alt="User Avatar"
          className="sidebar__user_avatar"
        />
        <p className="sidebar__user_name">{userName}</p>
      </div>
    </aside>
  );
}
