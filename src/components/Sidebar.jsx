import { sidebarItems } from "../data/globaldata";
import { 
  FaFileInvoice,
  FaUsers,
  FaCog,
  FaBook,
  FaTags,
  FaCalculator,
  FaTimesCircle,
  FaFileAlt,
  FaBoxes,
  FaUser,
  FaCloudUploadAlt,
  FaReply,
  FaGem,
  FaUserCircle 
} from "react-icons/fa";

export const sidebar_icons = [
  <FaFileInvoice color="" />,
  <FaUsers color="#34d399" />,
  <FaCog color="#fbbf24" />,
  <FaBook color="#a78bfa" />,
  <FaTags color="#fb7185" />,
  <FaCalculator color="#22d3ee" />,
  <FaTimesCircle color="#ef4444" />,
  <FaFileAlt color="#818cf8" />,
  <FaBoxes color="#f97316" />,
  <FaUser color="#14b8a6" />,
  <FaCloudUploadAlt color="#38bdf8" />,
  <FaReply color="#e879f9" />
];

export default function Sidebar({ sidebarView, setSidebarView }) {
  return (
    <>
      <aside className={`my-dashboard-sidebar ${sidebarView ? "open" : ""}`}>
        <div className="my-dashboard-sidebar-top">
          <div className="my-dashboard-brand">
            <div className="my-dashboard-brand-logo"><FaGem /></div>
            <div>
              <h2>Lafatukura</h2>
              <p>Admin Backoffice</p>
            </div>
          </div>
          
          <button type="button" className="my-dashboard-collapse-btn" onClick={() => setSidebarView(false)}>x</button>
        </div>
        
        <div className="my-dashboard-sidebar-profile my-modern-profile">
          <div className="my-dashboard-avatar my-modern-avatar"><FaUserCircle size={28} /></div>
          <div>
            <h3>Test01</h3>
            <p>test01@gmail.com</p>
          </div>
        </div>

        <div className="my-dashboard-sidebar-section-label">MAIN MENU</div>

        <div className="my-dashboard-sidebar-items my-modern-sidebar-items">
          {sidebarItems.map((sidebar, index) => (
            <button
              type="button"
              key={sidebar}
              className={`my-dashboard-sidebar-item my-modern-sidebar-item ${sidebar === "Price List" ? "active" : ""}`}
              onClick={() => setSidebarView(false)}
            >
              <span className="my-dashboard-sidebar-icon my-modern-sidebar-icon">{sidebar_icons[index] || "•"}</span>
              <span>{sidebar}</span>
              {sidebar === "Price List" ? <span className="my-sidebar-active-dot" /> : null}
            </button>
          ))}
        </div>

        <div className="my-dashboard-sidebar-footer">
          <div className="my-sidebar-footer-card">
            <strong>© Lafatukura, CRO</strong>
            <p>no. 638537, 2025. All rights reserved</p>
          </div>
        </div>
      </aside>

      <button type="button" className={`my-dashboard-sidebar-overlay ${sidebarView ? "open" : ""}`} 
        onClick={() => setSidebarView(false)}
        arial-label="Close sidebar"
      />
    </>
  );
}
