import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "@/pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={
          <LoginPage/>
        }
      />
    </Routes>
  );
}

export default App;