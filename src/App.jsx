import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={
            <LoginPage />
          }
        />
        <Route
          path="/product-list"
          element={
            <ProductListPage />
          }
        />
    </Routes>
  );
}

export default App;