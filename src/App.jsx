import "./App.css";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { Navigate, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product/add" element={<AddProductPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
