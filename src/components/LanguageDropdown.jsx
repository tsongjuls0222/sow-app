import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { languages } from "../data/globaldata";
import { FaChevronDown } from "react-icons/fa";

function LanguageDropdown({language, setLanguage}) {
    const [open,setOpen]            = useState(false);
    const [menuStyle,setMenuStyle]  = useState({ top: 0, left: 0, width: 220 });
    const triggerRef                = useRef(null);
    const current                   = languages.find((lang) => lang.code === language) || languages[0];

    useEffect(() => {
      const close_btn = () => setOpen(false);
      window.addEventListener("click", close_btn);
      return () => window.removeEventListener("click", close_btn);
    }, []);

    useEffect(() => {
      const changePosition = () => {
        if (!triggerRef.current) return;
        const rectb   = triggerRef.current.getBoundingClientRect();
        const widthb  = Math.max(220, rectb.width);
        const leftb   = Math.max(12, Math.min(rectb.right - widthb, window.innerWidth - widthb - 12));
        const topb    = rectb.bottom + 10;
        setMenuStyle({ top : topb, left : leftb, width: widthb });
      };

      changePosition();
      if (!open) return;

      window.addEventListener("resize", changePosition);
      window.addEventListener("scroll", changePosition, true);
      return () => {
        window.removeEventListener("resize", changePosition);
        window.removeEventListener("scroll", changePosition, true);
      };
    }, [open]);

    return (
      <>
        <button ref={triggerRef} type="button" className={`my-language-trigger ${open ? "open" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
        >
          <span className="my-language-trigger-left">
            <img src={current.flag} alt={current.label} className="my-flag-img" />
            <span>{current.label}</span>
          </span>

          <span className="chevron"><FaChevronDown /></span>

        </button>

        {open &&
          createPortal(
            <div className="my-language-portal" onClick={(e) => e.stopPropagation()}>
              <div className="my-language-menu" style={menuStyle}>
                {languages.map((lang) => (
                  <button type="button" key={lang.code} className={`my-language-option ${language === lang.code ? "active" : ""}`}
                    onClick={() => {
                      setLanguage(lang.code);
                      setOpen(false);
                    }}
                  >
                    <span className="my-language-trigger-left">
                      <img src={lang.flag} alt={lang.label} className="my-flag-img" />
                      <span>{lang.label}</span>
                    </span>
                    {language === lang.code ? <span className="my-check-mark">✓</span> : null}
                  </button>
                ))}
              </div>
            </div>,
            document.body
        )}
      </>
    );
}

export default LanguageDropdown;