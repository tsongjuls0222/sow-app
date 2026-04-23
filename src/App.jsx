import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import ProductListPage from "@/pages/ProductListPage";
import PublicRoute from "@/routes/PublicRoute";
import PrivateRoute from "@/routes/PrivateRoute";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute  />}>
          <Route path="/product-list" element={<ProductListPage />} />
        </Route>

    </Routes>
  );
}

export default App;