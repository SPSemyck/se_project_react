import "./ConfirmationModal.css";

import xIcon from "../../assets/closing-x-icon_grey.svg";

export const confirmationModal = ({ handleCloseClick }) => {
  return (
    <div className="modal">
      <button>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close-btn"
        >
          <img src={xIcon} alt="Closing button" />
        </button>
      </button>
      <p className="modal__text">
        Are you sure you want to delete this item? This action is irreversible.
      </p>
      <button className="modal__delete-btn" type="button">
        Yes, delete item
      </button>
      <button
        onClick={handleCloseClick}
        className="modal__cancel-btn"
        type="button"
      >
        Cancel
      </button>
    </div>
  );
};
