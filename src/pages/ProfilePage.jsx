function ProfilePage() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    return <div>Foydalanuvchi ma'lumotlari topilmadi.</div>;
  }

  return (
    <div className="mt-5">
      <h2>Profil</h2>
      <img
        src={userData.image}
        alt={`${userData.name} ${userData.surname}`}
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <p>Ism: {userData.name}</p>
      <p>Familiya: {userData.surname}</p>
      <p>Kasb: {userData.job}</p>
    </div>
  );
}

export default ProfilePage;