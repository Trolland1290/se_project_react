import "./ModalWithForm.css";

function ModalWithForm({
  isOpened,
  closeAllModals,
  children,
  title,
  name,
  onSubmit,
}) {
  return (
    <div className={isOpened ? "modal modal_opened" : "modal"}>
      <div className="modal__content">
        {" "}
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          name={name}
          className="modal__form"
        >
          <h2 className="modal__title">{title}</h2>
          <button
            onClick={(onClose) => {
              closeAllModals();
            }}
            type="button"
            className="modal__close"
          ></button>
          {children}
          <button type="submit" className="modal__submit">
            {"Add garment"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
