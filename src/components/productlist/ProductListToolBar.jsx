import { FaSlidersH, FaSearch , FaPlusCircle, FaPrint  } from "react-icons/fa";

function ProductListToolBar({filters, setFilters}) {
    return (
        <div className="productlist-toolbar-sticky">
            <div className="productlist-toolbar">
                <div className="productlist-search-group">
                <div className="productlist-search-box">
                    <input type="text" placeholder="Search Article No..." 
                        value={filters.article_no}
                        onChange={(e) =>
                            setFilters((prev) => ({
                                ...prev,
                                article_no: e.target.value,
                            }))
                        }
                    />
                    <span className="productlist-search-icon"><FaSearch  /></span>
                </div>

                <div className="productlist-search-box">
                    <input type="text" placeholder="Search Product..." 
                        value={filters.name}
                        onChange={(e) =>
                            setFilters((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }))
                        }
                    />
                    <span className="productlist-search-icon"><FaSearch  /></span>
                </div>
                </div>

                <div className="productlist-action-group">
                <button type="button" className="productlist-action-btn">
                    <span className="productlist-action-btn-icon green-text">
                    <FaPlusCircle />
                    </span>
                    <span className="productlist-action-btn-text">New Product</span>
                </button>

                <button type="button" className="productlist-action-btn">
                    <span className="productlist-action-btn-icon cyan-text">
                    <FaPrint />
                    </span>
                    <span className="productlist-action-btn-text">Print List</span>
                </button>

                <button type="button" className="productlist-action-btn">
                    <span className="productlist-action-btn-icon cyan-text">
                    <FaSlidersH />
                    </span>
                    <span className="productlist-action-btn-text">Advanced mode</span>
                </button>
                </div>
            </div>
        </div>
    );
}

export default ProductListToolBar;