import { navItems, languages } from "@/data/globaldata";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logoImage from "@/assets/diamond.png";

function LoginHeader({menuOpen, setMenuOpen, open, setOpen, dropdownRef, selected, setSelected}) {
    return (
        <header className="page-login-header">
            <button type="button" className="mobile-menu-btn" onClick={() => setMenuOpen((prev) => !prev)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
    
            <div className="page-login-header-logo">
                <img src={logoImage} alt="Image Logo" />
            </div>

            <div className="page-login-header-menu">
                <nav className="my-desktop-nav">
                    {navItems.map((item) => (
                        <a href="#" className="my-nav-link" key={item}>{item}</a>
                    ))}
                </nav>
    
                <div className="language-wrapper" ref={dropdownRef}>
                    <button type="button" className="language-trigger" onClick={() => setOpen((prev) => !prev)}>
                        <span>{selected.label}</span>
                        <img src={selected.flag} alt={selected.label} className="language-flag" />
                        <FaChevronDown className={`language-arrow ${open ? "rotate" : ""}`} />
                    </button>
        
                    {open && (
                        <div className="language-menu">
                            {languages.map((lang) => (
                                <div key={lang.code} className="language-item" onClick={() => { setSelected(lang); setOpen(false); }}>
                                    <span>{lang.label}</span>
                                    <img src={lang.flag} alt={lang.label} className="language-flag" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default LoginHeader;