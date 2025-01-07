import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import Navbar from "./components/navbar/Navbar";
import EditOrderForm from "./components/add/EditOrderForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditOrderForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
