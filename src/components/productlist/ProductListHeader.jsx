import { navItems, languages } from "@/data/globaldata";
import { FaChevronDown, FaBars, FaTimes, FaCaretDown  } from "react-icons/fa";
import logoImage from "@/assets/diamond.png";
import avatarImg  from "@/assets/avatar.jpg";

function ProductListHeader({setMenuOpen, languageRef, setLanguageOpen, selectedLanguage, languageOpen, setSelectedLanguage}) {
    return (
        <header className="productlist-topbar">
            <div className="productlist-topbar-left">
                <button type="button" aria-label="Open menu" className="productlist-hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
                    <span />
                    <span />
                    <span />
                </button>

                <div className="productlist-avatar-wrap desktop-only-user">
                    <img src={avatarImg} alt="User Avatar" className="productlist-avatar" />
                    <span className="productlist-online-dot" />
                </div>

                <div className="productlist-user-info desktop-only-user">
                    <div className="productlist-user-name">Test01 test01@gmail.com</div>
                    <div className="productlist-user-company">Administrator</div>
                </div>
            </div>

            <div className="productlist-topbar-right" ref={languageRef}>
                <button type="button" className="productlist-language-trigger" onClick={() => setLanguageOpen((prev) => !prev)} >
                    <span className="productlist-language-text">{selectedLanguage.label}</span>
                    <img src={selectedLanguage.flag} alt={selectedLanguage.label} className="productlist-flag" />
                    <span className={`productlist-language-arrow ${languageOpen ? "open" : ""}`}><FaCaretDown /></span>
                </button>

                {languageOpen && (
                    <div className="productlist-language-menu">
                        {languages.map((lang) => (
                            <button type="button" key={lang.code} className="productlist-language-item"
                                onClick={() => {
                                    setSelectedLanguage(lang);
                                    setLanguageOpen(false);
                                }}
                            >
                                <span>{lang.label}</span>
                                <img src={lang.flag} alt={lang.label} className="productlist-flag" />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}

export default ProductListHeader;