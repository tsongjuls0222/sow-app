import "@/styles/login.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navItems, languages } from "@/data/globaldata";
import bgImage from "@/assets/bg.jpg";
import Toast from "@/components/Toast";
import LoginHeader from "../components/login/LoginHeader";
import LoginMobileMenu from "../components/login/LoginMobileMenu";
import LoginFooter from "../components/login/LoginFooter";
import LoginForm from "../components/login/LoginForm";

function LoginPage() {
  const [open, setOpen]         = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(languages[1]);
  const dropdownRef             = useRef(null);
  const [toast, setToast]       = useState(null);
  const navigate                = useNavigate();

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => { setToast(null); }, 1500);
  };

  useEffect(() => {
    showToast("Logout! Welcome to", "success");
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)){
        setOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = async () => {
    navigate("/product-list");
  };

  return (
    <div className="page" style={{ backgroundImage: `url(${bgImage})` }}>
      <Toast toast={toast} onClose={() => setToast(null)} />
      <div className="page-content">
        <LoginHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} open={open} setOpen={setOpen} dropdownRef={dropdownRef} selected={selected} setSelected={setSelected} />
        <LoginMobileMenu menuOpen={menuOpen} />
        <LoginForm handleLogin={handleLogin} />
        <LoginFooter />
      </div>
    </div>
  );
}

export default LoginPage;