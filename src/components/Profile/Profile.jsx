import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";

export default function Profile({
  handleCardClick,
  handleAddClick,
  clothingItems,
}) {
  return (
    <section className="profile">
      <Sidebar />
      <ClothesSection
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
      />
    </section>
  );
}
