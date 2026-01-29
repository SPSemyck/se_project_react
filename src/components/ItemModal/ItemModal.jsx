import "./ItemModal.css";
// Images
import xIcon from "../../assets/closing-x-icon_white.svg";

function ItemModal({
  activeModal,
  card,
  handleCloseClick,
  handleDeleteConfirmation,
}) {
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
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__info">
            <h2 className="modal__caption">{card.name}</h2>
            <button
              onClick={handleDeleteConfirmation}
              className="modal__delete-btn"
              type="button"
            >
              Delete item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
