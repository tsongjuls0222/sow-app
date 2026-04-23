import { navItems } from "@/data/globaldata";

function LoginMobileMenu({menuOpen}) {
    return (
        <div className={`mobile-dropdown-menu ${menuOpen ? "show" : ""}`}>
          <nav className="mobile-dropdown-nav">
            {navItems.map((item) => (
              <a href="#" className="mobile-dropdown-link" key={item}>
                {item}
              </a>
            ))}
          </nav>
        </div>
    );
}

export default LoginMobileMenu;