import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResturantPage from "./pages/ResturantPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/restaurants_cafe" element={<ResturantPage />} />
      </Routes>
    </Router>
  );
}

export default App;
