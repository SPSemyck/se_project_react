import "./ClothesSection.css";

import ItemCard from "../ItemCard/ItemCard.jsx";

export default function ClothesSection({
  handleCardClick,
  handleAddClick,
  clothingItems,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__description">Your items</p>
        <button
          onClick={handleAddClick}
          type="button"
          className="clothes-section__add-btn"
        >
          + Add new
        </button>
      </div>
      <div>
        <ul className="clothes-section__list">
          {clothingItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
