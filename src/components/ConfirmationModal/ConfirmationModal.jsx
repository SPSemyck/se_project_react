import "./ConfirmationModal.css";

import xIcon from "../../assets/closing-x-icon_grey.svg";

const ConfirmationModal = ({
  handleCloseClick,
  activeModal,
  handleCardDelete,
}) => {
  function handleDelete(selectedCard) {
    handleCardDelete(selectedCard._id);
  }

  return (
    <div className={`modal ${activeModal === "delete" && "modal_is-open"}`}>
      <div className="delete-modal__content">
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close-btn"
        >
          <img src={xIcon} alt="Closing button" />
        </button>
        <p className="delete-modal__text">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <button
          onClick={handleDelete}
          className="delete-modal__btn"
          type="button"
        >
          Yes, delete item
        </button>
        <button
          onClick={handleCloseClick}
          className="delete-modal__cancel-btn"
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
