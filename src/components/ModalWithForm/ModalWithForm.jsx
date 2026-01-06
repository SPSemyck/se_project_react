import "./ModalWithForm.css";
import xIcon from "../../assets/closing-x-icon_grey.svg";

function ModalWithForm({
  children,
  title,
  buttonText,
  isOpen,
  handleCloseClick,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_is-open" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close-btn"
        >
          <img src={xIcon} alt="Closing button" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit_btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
