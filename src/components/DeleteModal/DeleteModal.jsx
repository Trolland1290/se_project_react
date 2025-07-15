import "./DeleteModal.css";

function DeleteModal({ onClose, onCardClick, isOpen, handleDeleteCard }) {
  //   useModalClose(isOpen, onCardClick);
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content-delete">
        <button
          onClick={onClose}
          type="button"
          className=" delete__close_image "
        ></button>
        <h3>
          Are you sure you still want to delete this item? This action is
          irreversable
        </h3>
        <button
          onClick={handleDeleteCard}
          type="button"
          className="delete__confirm"
        >
          Yes, delete item
        </button>
        <button onClick={onClose} type=" button" className="delete__cancel">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;

// const cancelButton = document.querySelector(".delete__cancel")
// cancelButton.addEventListener('click', onClose)
