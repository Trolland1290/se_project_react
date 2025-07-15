import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ handleCardClick, itemData, openCreateModal }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__info">
        <p>Your Items</p>
        <button
          onClick={() => {
            openCreateModal();
          }}
        >
          +Add New
        </button>
      </div>

      <ul className="clothes-section__items">
        {" "}
        {itemData.map((filteredCard) => (
          <ItemCard
            key={filteredCard._id}
            card={filteredCard}
            handleCardClick={handleCardClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;
