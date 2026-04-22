import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navItems, languages } from "@/data/globaldata";
import AlertStack from "../components/AlertStack";
import Sidebar from "../components/Sidebar";

function ProductListPage({theme, language, setLanguage, notifs, deleteAlert, showAlert, sidebarView, setSidebarView}) {
    const currentLang = languages.find((lang) => lang.code === language) || languages[0];
    useEffect(() => {
        showAlert({
            name: "Logged in",
            text: "Welcome to Dashboard."
        });
    }, []);

    return (
        <div className={`myapp ${theme}`}>
            <AlertStack notifs={notifs} removeAlert={deleteAlert} />
            <div className="my-dashboard-page my-modern-dashboard-page">
                <Sidebar sidebarView={sidebarView} setSidebarView={setSidebarView} />
            </div>
        </div>
    );
}

export default ProductListPage;