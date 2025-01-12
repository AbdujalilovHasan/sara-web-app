import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && userData.password === password) {
      localStorage.setItem("isLoggedIn", true);
      alert("Tizimga muvaffaqiyatli kirdingiz!");
      navigate("/profile");
    } else {
      alert("Parol noto'g'ri!");
    }
  };

  return (
    <form onSubmit={handleLogin} className="mt-5">
      <h2>Tizimga kirish</h2>
      <div>
        <label>Parol:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Kirish</button>
    </form>
  );
}

export default LoginPage;