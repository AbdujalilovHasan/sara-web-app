import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import Navbar from "./components/navbar/Navbar";
import EditOrderForm from "./components/add/EditOrderForm";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/RegistrationPage";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          {!isLoggedIn && (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/register" replace />} />
            </>
          )}
          {isLoggedIn && (
            <>
              <Route index element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/edit/:id" element={<EditOrderForm />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;