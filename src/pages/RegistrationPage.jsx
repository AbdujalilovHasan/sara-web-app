import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [image, setImage] = useState(null);
  const [job, setJob] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      name,
      surname,
      image: image ? URL.createObjectURL(image) : "",
      job,
      password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
    navigate("/login");
  };

  return (
    <form onSubmit={handleRegister} className="mt-5">
      <h2>Ro'yxatdan o'tish</h2>
      <div>
        <label>Ism:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Familiya:</label>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Rasm:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </div>
      <div>
        <label>Kasb:</label>
        <input
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Parol:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Ro'yxatdan o'tish</button>
    </form>
  );
}

export default RegistrationPage;