import "@/styles/login.css";
import { useState, useRef, useEffect } from "react";
import { navItems, languages } from "@/data/globaldata";
import bgImage from "@/assets/bg.jpg";
import Toast from "@/components/Toast";
import LoginHeader from "@/components/login/LoginHeader";
import LoginMobileMenu from "@/components/login/LoginMobileMenu";
import LoginFooter from "@/components/login/LoginFooter";
import LoginForm from "@/components/login/LoginForm";
import { useToast } from "@/context/ToastContext";

function LoginPage() {
  const [open, setOpen]         = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(languages[1]);
  const dropdownRef             = useRef(null);
  const { showToast }           = useToast();

  useEffect(() => {
    showToast("You Logout! Welcome to Login.", "error");
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)){
        setOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="page-content">
        <LoginHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} open={open} setOpen={setOpen} dropdownRef={dropdownRef} selected={selected} setSelected={setSelected} />
        <LoginMobileMenu menuOpen={menuOpen} />
        <LoginForm />
        <LoginFooter />
      </div>
    </div>
  );
}

export default LoginPage;