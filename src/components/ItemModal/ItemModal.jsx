import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card, openDeleteModal }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className=" modal__close_image "
        ></button>
        <img
          src={card.imageUrl}
          alt="clothes image"
          className="modal__image modal__image-preview"
        />
        <div className="modal__footer">
          {" "}
          <div className="modal__wrapper">
            <h2 className="modal__caption">{card.name}</h2>
            <button
              className="modal__caption-delete"
              onClick={openDeleteModal}
              type="button"
            >
              {" "}
              Delete Item
            </button>
          </div>
          <p className="modal__weather">Weather: {card.weather} </p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
