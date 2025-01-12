
function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>Profil</h2>
      {user ? (
        <div>
          <p>Ism: {user.name}</p>
          <p>Familiya: {user.surname}</p>
          <p>Kasb: {user.profession}</p>
        </div>
      ) : (
        <p>Foydalanuvchi ma'lumotlari topilmadi.</p>
      )}
    </div>
  );
}

export default ProfilePage;