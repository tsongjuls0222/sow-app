import { useState } from "react";
import diamond_logo from "@/assets/diamond.png";
import { navItems } from "@/data/globaldata";
import LanguageDropdown from "./LanguageDropdown";

function MobileMenu({menuOpen, setMenuOpen}) {
    return (
        <>
        <div className={`my-mobile-nav-drawer ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
                <a key={item} href="#" className="my-mobile-nav-link" onClick={() => setMenuOpen(false)}>
                    {item}
                </a>
            ))}
        </div>
            <div
                className={`my-mobile-nav-backdrop ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(false)}
            />
        </>
    );
}

export default MobileMenu;