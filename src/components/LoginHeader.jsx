import { useState } from "react";
import diamond_logo from "@/assets/diamond.png";
import { navItems } from "@/data/globaldata";
import LanguageDropdown from "./LanguageDropdown";

function LoginHeader({menuOpen, setMenuOpen, language, setLanguage}) {
    return (
        <header className="my-login-topbar">
            <div className="my-login-topbar-left">
            <div className="my-logo-diamond">
                <img className="my-logo-diamond-img" src={diamond_logo} alt="Diamond logo" />
            </div>
            <button
                type="button"
                className={`my-hamburger ${menuOpen ? "active" : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen((prev) => !prev);
                }}
            >
                <span />
                <span />
                <span />
            </button>
            </div>
            <div className="my-login-topbar-right">
                <nav className="my-desktop-nav">
                    {navItems.map((item) => (
                    <a href="#" className="my-nav-link" key={item}>
                        {item}
                    </a>
                    ))}
                </nav>
                <LanguageDropdown language={language} setLanguage={setLanguage} />
            </div>
        </header>
    );
}

export default LoginHeader;