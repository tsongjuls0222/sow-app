import "@/styles/dashboard.css";

import { useEffect, useRef, useState } from "react";
import { languages } from "../data/globaldata";
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
import Toast from "@/components/Toast";
import ProductListHeader from "../components/productlist/ProductListHeader";
import ProductListSideBar from "../components/productlist/ProductListSideBar";
import ProductListToolBar from "../components/productlist/ProductListToolBar";
import ProductListTableDesktop from "../components/productlist/ProductListTableDesktop";
import ProductListTableTablet from "../components/productlist/ProductListTableTablet";
import ProductListTableMobile from "../components/productlist/ProductListTableMobile";

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

const initialProducts = [
  {
    id: 1,
    articleNo: "1234567890",
    productService: "This is a test product with fifty characters this!",
    inPrice: "900500",
    price: "1500800",
    unit: "kilometers/hour",
    inStock: "2500600",
    description: "This is the description with fifty characters this",
  },
  {
    id: 2,
    articleNo: "2234567890",
    productService: "Sony DSLR 12345",
    inPrice: "700500",
    price: "15000",
    unit: "pieces",
    inStock: "500000",
    description: "Second description row sample",
  },
  {
    id: 3,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 4,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 5,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 6,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 7,
    articleNo: "1234567890",
    productService: "This is a test product with fifty characters this!",
    inPrice: "900500",
    price: "1500800",
    unit: "kilometers/hour",
    inStock: "2500600",
    description: "This is the description with fifty characters this",
  },
  {
    id: 8,
    articleNo: "2234567890",
    productService: "Sony DSLR 12345",
    inPrice: "700500",
    price: "15000",
    unit: "pieces",
    inStock: "500000",
    description: "Second description row sample",
  },
  {
    id: 9,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 10,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 11,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 12,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 13,
    articleNo: "1234567890",
    productService: "This is a test product with fifty characters this!",
    inPrice: "900500",
    price: "1500800",
    unit: "kilometers/hour",
    inStock: "2500600",
    description: "This is the description with fifty characters this",
  },
  {
    id: 14,
    articleNo: "2234567890",
    productService: "Sony DSLR 12345",
    inPrice: "700500",
    price: "15000",
    unit: "pieces",
    inStock: "500000",
    description: "Second description row sample",
  },
  {
    id: 15,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 16,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 17,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 18,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 19,
    articleNo: "1234567890",
    productService: "This is a test product with fifty characters this!",
    inPrice: "900500",
    price: "1500800",
    unit: "kilometers/hour",
    inStock: "2500600",
    description: "This is the description with fifty characters this",
  },
  {
    id: 20,
    articleNo: "2234567890",
    productService: "Sony DSLR 12345",
    inPrice: "700500",
    price: "15000",
    unit: "pieces",
    inStock: "500000",
    description: "Second description row sample",
  },
  {
    id: 21,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 22,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 23,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
    {
    id: 24,
    articleNo: "3234567890",
    productService: "Random product",
    inPrice: "123",
    price: "1234",
    unit: "item",
    inStock: "9999",
    description: "Random description",
  },
];

function EditableField({ value, onChange, fieldClassName = "" }) {
    return (
        <input className={`cell-input ${fieldClassName}`.trim()} value={value} onChange={onChange} />
    );
}

function ProductListPage() {
    const [menuOpen, setMenuOpen]                 = useState(false);
    const [languageOpen, setLanguageOpen]         = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [products, setProducts]                 = useState(initialProducts);
    const [selectedRowId, setSelectedRowId]       = useState(initialProducts[0].id);
    const [activeRowMenu, setActiveRowMenu]       = useState(null);
    const [activeMenuPos, setActiveMenuPos]       = useState({ top: 0, left: 0 });
    const languageRef                             = useRef(null);
    const actionMenuRef                           = useRef(null);
    const [toast, setToast]                     = useState(null);

    const showToast = (message, type = "success") => {
        setToast({ message, type });
        setTimeout(() => { setToast(null); }, 1500);
    };

    useEffect(() => {
        showToast("Login! Welcome to Product List.", "success");
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

    const handleUpdate = () => {
        setActiveRowMenu(null);
        alert("Updated");
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

    const renderRowActions = (rowId) => (
        <div className="row-table-menu-wrap">
            <button type="button" className="row-table-more-btn" onClick={(e) => openRowMenu(e, rowId)} ><FaEllipsisH /></button>
        </div>
    );

    return (
        <div className="productlist-page">
            <Toast toast={toast} onClose={() => setToast(null)} />
            <ProductListHeader setMenuOpen={setMenuOpen} languageRef={languageRef} setLanguageOpen={setLanguageOpen} selectedLanguage={selectedLanguage} languageOpen={languageOpen} setSelectedLanguage={setSelectedLanguage} />
            <div className="productlist-body">
                <ProductListSideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuItems={menuItems} />
                <main className="productlist-content">
                    <div className="productlist-inner">
                        <ProductListToolBar />
                        <ProductListTableDesktop products={products} EditableField={EditableField} selectedRowId={selectedRowId} setSelectedRowId={setSelectedRowId} changeField={changeField} renderRowActions={renderRowActions}/>
                        <ProductListTableTablet products={products} EditableField={EditableField} selectedRowId={selectedRowId} setSelectedRowId={setSelectedRowId} changeField={changeField} renderRowActions={renderRowActions}/>
                        <ProductListTableMobile products={products} EditableField={EditableField} selectedRowId={selectedRowId} setSelectedRowId={setSelectedRowId} changeField={changeField} renderRowActions={renderRowActions}/>
                    </div>
                </main>
            </div>

            {activeRowMenu !== null && (
                <>
                    <button type="button" aria-label="Close actions" className="row-action-upd-del-overlay" onClick={() => setActiveRowMenu(null)} />
                    <div className="row-action-upd-del-menu fixed-menu" style={{ top: `${activeMenuPos.top}px`, left: `${activeMenuPos.left}px` }} ref={actionMenuRef} >
                        <button type="button" className="row-action-upd-del-btn update-product-btn" onClick={handleUpdate}>Update</button>
                        <button type="button" className="row-action-upd-del-btn delete-product-btn" onClick={() => handleDelete(activeRowMenu)}>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductListPage;