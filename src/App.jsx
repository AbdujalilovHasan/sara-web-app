import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index element={<HomePage />} />
          <Route index element={<AddPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;