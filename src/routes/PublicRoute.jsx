import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/useAuth";

export default function PublicRoute() {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? <Outlet /> : <Navigate to="/product-list" replace />;
}