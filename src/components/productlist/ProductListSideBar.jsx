import { navItems, languages } from "@/data/globaldata";
import { FaChevronDown, FaBars, FaTimes, FaCaretDown  } from "react-icons/fa";
import logoImage from "@/assets/diamond.png";
import avatarImg  from "@/assets/SE.png";

function ProductListSideBar({menuOpen, setMenuOpen, menuItems}) {
    return (
        <>
            <aside className={`productlist-sidebar ${menuOpen ? "open" : ""}`}>
                <div className="productlist-sidebar-head">
                    <h2 className="productlist-sidebar-title">Menu</h2>
                    <button type="button" className="productlist-sidebar-close" onClick={() => setMenuOpen(false)}><FaTimes /></button>
                </div>
                <div className="productlist-sidebar-line" />
                <nav className="productlist-menu">
                    {menuItems.map((item) => (
                        <button type="button" key={item.label} className={`productlist-menu-item ${item.active ? "active" : ""} ${item.muted ? "muted" : ""}`}>
                            <span className="productlist-menu-icon">{item.icon}</span>
                            <span className="productlist-menu-text">{item.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {menuOpen && (
                <button type="button" aria-label="Close sidebar" className="productlist-sidebar-overlay" onClick={() => setMenuOpen(false)}/>
            )}
        </>
    );
}

export default ProductListSideBar;