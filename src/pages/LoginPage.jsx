import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "@/assets/bg.jpg";
import LoginHeader from "../components/LoginHeader";
import MobileMenu from "../components/MobileMenu";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import { navItems, languages } from "@/data/globaldata";
import AlertStack from "../components/AlertStack";

function LoginPage({theme, language, setLanguage, menuOpen, setMenuOpen, handleLogin, notifs, deleteAlert, showAlert}) {
    const currentLang = languages.find((lang) => lang.code === language) || languages[0];

    useEffect(() => {
        showAlert({
            name: "Logged out",
            text: "Welcome to Login."
        });
    }, []);

    return (
        <div className={`myapp ${theme}`} style={{ backgroundImage: `url(${bgImage})`}}>
            <AlertStack notifs={notifs} removeAlert={deleteAlert} />
            <div className="my-login-page">
                <div className="my-login-page-overlay" />
                <LoginHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} language={language} setLanguage={setLanguage} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <LoginForm handleLogin={handleLogin} />
                <Footer />
            </div>
        </div>
    );
}

export default LoginPage;