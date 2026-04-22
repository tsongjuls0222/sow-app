import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "@/pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  const [theme,setTheme]                  = useState("light");
  const [language,setLanguage]            = useState("en");
  const [loginMenuOpen,setLoginMenuOpen]  = useState(false);
  const [notifs,setAlerts]                = useState([]);
  const [sidebarView,setSidebarView]      = useState(false);
  const navigate                          = useNavigate();

  const showAlert = ({ name, text, type = "success" }) => {
    const id = Date.now() + Math.random();
    setAlerts((p) => [...p, { id, name, text, type }]);
    window.setTimeout(() => {
        setAlerts((p) => p.filter((n) => n.id !== id));
    }, 1200);
  };

  const deleteAlert = (id) => {
    setAlerts((p) => p.filter((n) => n.id !== id));
  };

  const handleLogin = () => {
    navigate("/product-list")
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={
          <LoginPage theme={theme} language={language} setLanguage={setLanguage} menuOpen={loginMenuOpen} setMenuOpen={setLoginMenuOpen} handleLogin={handleLogin} notifs={notifs} deleteAlert={deleteAlert} showAlert={showAlert} />
        }
      />
      <Route
        path="/product-list"
        element={
          <ProductListPage
            theme={theme}
            setTheme={setTheme}
            language={language}
            setLanguage={setLanguage}
            notifs={notifs}
            deleteAlert={deleteAlert}
            showAlert={showAlert}
            sidebarView={sidebarView}
            setSidebarView={setSidebarView}
          />
        }
      />
    </Routes>
  );
}

export default App;