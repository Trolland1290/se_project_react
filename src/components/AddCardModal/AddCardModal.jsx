import { useState } from "react";
import { defaultClothingItems } from "../../utils/constants";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddCardModal({ closeAllModals, isOpened }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [weather, setWeather] = useState("");

  const clothingItemLength = defaultClothingItems.length;

  const formData = {
    _id: clothingItemLength,
    name: name,
    link: link,
    weather: weather,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    defaultClothingItems.push(formData);
    e.target.reset();
    closeAllModals();
  };
  return (
    <ModalWithForm
      title="Add Garment"
      name="create-new-card"
      onSubmit={handleSubmit}
      closeAllModals={closeAllModals}
      isOpened={isOpened}
    >
      {" "}
      <label htmlFor="name" className="modal__label">
        {" "}
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label htmlFor="imageURL" className="modal__label">
        {" "}
        Image{" "}
        <input
          type="text"
          className="modal__input"
          id="imageURL"
          placeholder="Image URL"
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            name="weather"
            className="modal__input modal__input_type_radio"
            onChange={(e) => setWeather("hot")}
            required
          />
          Hot
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            name="weather"
            type="radio"
            className="modal__input modal__input_type_radio"
            onChange={(e) => setWeather("cold")}
            required
          />
          Cold
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="weather"
            className="modal__input modal__input_type_radio"
            onChange={(e) => setWeather("warm")}
            required
          />
          Warm
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddCardModal;
