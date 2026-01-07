import "./ItemModal.css";
import xIcon from "../../assets/closing-x-icon_white.svg";

function ItemModal({ activeModal, card, handleCloseClick }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_is-open"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close-btn"
        >
          <img src={xIcon} alt="Closing button" />
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
