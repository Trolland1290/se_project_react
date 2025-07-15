import { useState } from "react";
// import { defaultClothingItems } from "../../utils/constants";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddCardModal({ onClose, isOpened, handleAddCard, clothingItems }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const clothingItemLength = clothingItems.length;

  const formData = {
    _id: clothingItemLength,
    name: name,
    imageUrl: imageUrl,
    weather: weather,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // defaultClothingItems.push(formData);
    handleAddCard(formData);
    e.target.reset();
    onClose();
  };
  return (
    <ModalWithForm
      title="Add Garment"
      name="create-new-card"
      onSubmit={handleSubmit}
      onClose={onClose}
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
          onChange={(e) => setImageUrl(e.target.value)}
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
