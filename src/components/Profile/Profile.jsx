import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ handleCardClick, itemData, openCreateModal }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />{" "}
      </section>
      <section className="profile__clothing">
        <ClothesSection
          handleCardClick={handleCardClick}
          itemData={itemData}
          openCreateModal={openCreateModal}
        />
      </section>
    </div>
  );
}

export default Profile;
