import "@/styles/dashboard.css";

import { useEffect, useRef, useState } from "react";
import { languages } from "@/data/globaldata";
import {
  FaFileInvoice,
  FaUsers,
  FaCog,
  FaBook,
  FaTag,
  FaFileAlt,
  FaTimesCircle,
  FaPercent,
  FaClipboardList,
  FaCloudUploadAlt,
  FaSignOutAlt,
  FaCoins,
  FaWarehouse,
  FaBalanceScale,
  FaAlignLeft,
  FaEllipsisH, 
  FaEllipsisV,
  FaCaretDown,
  FaTimes
} from "react-icons/fa";
import { useToast } from "@/context/ToastContext";
import api from "@/api/axios";
import Toast from "@/components/Toast";
import ProductListHeader from "@/components/productlist/ProductListHeader";
import ProductListSideBar from "@/components/productlist/ProductListSideBar";
import ProductListToolBar from "@/components/productlist/ProductListToolBar";
import ProductListTableDesktop from "@/components/productlist/ProductListTableDesktop";
import ProductListTableTablet from "@/components/productlist/ProductListTableTablet";
import ProductListTableMobile from "@/components/productlist/ProductListTableMobile";
import EditableField from "@/components/productlist/EditableField";

const menuItems = [
  { label: "Invoices", icon: <FaFileInvoice />, active: false },
  { label: "Customers", icon: <FaUsers />, active: false },
  { label: "My Business", icon: <FaCog />, active: false },
  { label: "Invoice Journal", icon: <FaBook />, active: false },
  { label: "Price List", icon: <FaTag />, active: true },
  { label: "Multiple Invoicing", icon: <FaFileAlt />, active: false },
  { label: "Unpaid Invoices", icon: <FaTimesCircle />, active: false },
  { label: "Offer", icon: <FaPercent />, active: false },
  { label: "Inventory Control", icon: <FaClipboardList />, active: false, muted: true },
  { label: "Import/Export", icon: <FaCloudUploadAlt />, active: false },
  { label: "Log out", icon: <FaSignOutAlt />, active: false },
];

function ProductListPage() {
    const [menuOpen, setMenuOpen]                 = useState(false);
    const [languageOpen, setLanguageOpen]         = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [products, setProducts]                 = useState([]);
    const [selectedRowId, setSelectedRowId]       = useState(0);
    const [activeRowMenu, setActiveRowMenu]       = useState(null);
    const [activeMenuPos, setActiveMenuPos]       = useState({ top: 0, left: 0 });
    const languageRef                             = useRef(null);
    const actionMenuRef                           = useRef(null);
    const { showToast }                           = useToast();
    const [loading, setLoading]                   = useState(true);
    const [update, setUpdate]                     = useState(false);
    const [filters, setFilters]                   = useState({
      article_no: "",
      name: "",
    });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setLanguageOpen(false);
            }
            if (actionMenuRef.current && !actionMenuRef.current.contains(event.target)) {
                setActiveRowMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleResizeOrScroll = () => {
            if (window.innerWidth > 1202) {
                setMenuOpen(false);
            }
            setActiveRowMenu(null);
        };

        window.addEventListener("resize", handleResizeOrScroll);
        window.addEventListener("scroll", handleResizeOrScroll, true);

        return () => {
            window.removeEventListener("resize", handleResizeOrScroll);
            window.removeEventListener("scroll", handleResizeOrScroll, true);
        };
    }, []);

    const changeField = (id, key, value) => {
        setProducts((p) =>
            p.map((item) => (item.id === id ? { ...item, [key]: value } : item))
        );
    };

    const handleDelete = (id) => {
        const next = products.filter((item) => item.id !== id);
        setProducts(next);
        if (selectedRowId === id && next.length) {
            setSelectedRowId(next[0].id);
        }
        setActiveRowMenu(null);
    };

    const handleUpdate = async () => {
        if (update) return;
        setActiveRowMenu(null);
        setUpdate(true);
        try {
            const product = activeRowMenu;
            const res = await api.patch(`/product/${product.id}`,{ 
                article_no : product.article_no, 
                name : product.name,
                in_price : product.in_price,
                price : product.price,  
                unit : product.unit,
                stock : product.stock,
                description : product.description 
            });
            await fetchData();
            
            showToast(res.status === 200 ? "Update Product Success" : "Failed.", res.status === 200 ? "success" : "error");
        } catch (error) {
            console.error(error);
            showToast(`Update Product Error ${error?.response?.data?.message || error.message}`,"error");
        } finally {
            setActiveRowMenu(null);
            setUpdate(false);
        }
    };

    const saveField = async (row, id, key, value) => {
        try {
            const res = await api.patch(`/product/${id}`, {
                article_no: row.article_no,
                name: row.name,
                in_price: row.in_price,
                price: row.price,
                unit: row.unit,
                stock: row.stock,
                description: row.description
            });
            showToast(res.status === 200 ? "Update Product Success" : "Failed.", res.status === 200 ? "success" : "error");
        } catch (error) {
            console.error(error);
            showToast(`Update Product Error ${error?.response?.data?.message || error.message}`,"error");
        }
    };

    const openRowMenu = (event, rowId) => {
        event.stopPropagation();
        const rect          = event.currentTarget.getBoundingClientRect();
        const menuWidth     = 140;
        const menuHeight    = 112;
        const gap           = 8;
        let left            = rect.right + gap;
        let top             = rect.top + rect.height / 2 - menuHeight / 2;

        if (left + menuWidth > window.innerWidth - 12) {
            left = rect.left - menuWidth - gap;
        }

        if (left < 12) left = 12;
        if (top + menuHeight > window.innerHeight - 12) {
        top = window.innerHeight - menuHeight - 12;
        }
        if (top < 12) top = 12;

        setActiveMenuPos({ top, left });
        setActiveRowMenu((prev) => (prev === rowId ? null : rowId));
    };

    const renderRowActions = (row) => (
        <div className="row-table-menu-wrap">
            <button type="button" className="row-table-more-btn" onClick={(e) => openRowMenu(e, row)} ><FaEllipsisH /></button>
        </div>
    );

    const fetchData = async () => {
      try {
        const res = await api.get("/product/list", {
          params: {
            article_no: filters.article_no,
            name: filters.name,
          },
        });

        const data = res.data?.data || [];
        setProducts(data);
        

        showToast(data.length > 0 ? "Get Products Success" : "No result found.", data.length > 0 ? "success" : "error");
      } catch (error) {
        console.error(error);
        showToast(
          `Get Products Error ${error?.response?.data?.message || error.message}`,
          "error"
        );
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, [filters]);


    useEffect(() => {
        const handleResizeOrScroll = () => {
            if (window.innerWidth > 1202) {
                setMenuOpen(false);
            }
            setActiveRowMenu(null);
        };

        window.addEventListener("resize", handleResizeOrScroll);
        window.addEventListener("scroll", handleResizeOrScroll, true);

        return () => {
            window.removeEventListener("resize", handleResizeOrScroll);
            window.removeEventListener("scroll", handleResizeOrScroll, true);
        };
    }, []);


    return (
        <div className="productlist-page">
            <ProductListHeader setMenuOpen={setMenuOpen} languageRef={languageRef} setLanguageOpen={setLanguageOpen} selectedLanguage={selectedLanguage} languageOpen={languageOpen} setSelectedLanguage={setSelectedLanguage} />
            <div className="productlist-body">
                <ProductListSideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuItems={menuItems} />
                <main className="productlist-content">
                    <div className="productlist-inner">
                        <ProductListToolBar filters={filters} setFilters={setFilters}/>
                        <ProductListTableDesktop products={products} EditableField={EditableField} selectedRowId={selectedRowId} setSelectedRowId={setSelectedRowId} changeField={changeField}  saveField={saveField} renderRowActions={renderRowActions}/>
                        <ProductListTableTablet products={products} EditableField={EditableField} selectedRowId={selectedRowId} setSelectedRowId={setSelectedRowId} changeField={changeField} saveField={saveField} renderRowActions={renderRowActions}/>
                        <ProductListTableMobile products={products} EditableField={EditableField} selectedRowId={selectedRowId} setSelectedRowId={setSelectedRowId} changeField={changeField} saveField={saveField} renderRowActions={renderRowActions}/>
                    </div>
                </main>
            </div>

            {activeRowMenu !== null && (
                <>
                    <button type="button" aria-label="Close actions" className="row-action-upd-del-overlay" onClick={() => setActiveRowMenu(null)} />
                    <div className="row-action-upd-del-menu fixed-menu" style={{ top: `${activeMenuPos.top}px`, left: `${activeMenuPos.left}px` }} ref={actionMenuRef} >
                        <button type="button" className="row-action-upd-del-btn update-product-btn" onClick={handleUpdate}>Update</button>
                        <button type="button" className="row-action-upd-del-btn delete-product-btn" onClick={() => handleDelete(activeRowMenu.id)}>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductListPage;