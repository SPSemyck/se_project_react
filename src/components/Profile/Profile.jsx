import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";

export default function Profile() {
  return (
    <section>
      <Sidebar />
      <ClothesSection />
    </section>
  );
}
