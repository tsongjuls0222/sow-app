import {
  FaCoins,
  FaBalanceScale,
  FaWarehouse,
  FaAlignLeft,
  FaArrowRight,
  FaArrowDown 
} from "react-icons/fa";

function ProductListTableDesktop({products, EditableField, selectedRowId, setSelectedRowId, changeField, renderRowActions}) {
    return (
        <div className="my-table-desktop">
            <div className="desktop-my-table-header">
                <div />
                <div>Article No. <FaArrowDown  /></div>
                <div>Product/Service <FaArrowDown  /></div>
                <div><FaCoins className="my-table-head-icon" /> In Price</div>
                <div><FaCoins className="my-table-head-icon" /> Price</div>
                <div><FaBalanceScale className="my-table-head-icon" /> Unit</div>
                <div><FaWarehouse className="my-table-head-icon" /> In Stock</div>
                <div><FaAlignLeft className="my-table-head-icon" /> Description</div>
                <div />
            </div>

            {products.map((row) => (
                <div className={`desktop-my-table-row ${selectedRowId === row.id ? "selected" : ""}`} key={row.id} onClick={() => setSelectedRowId(row.id)}>
                    <div className="row-table-arrow-cell">
                        {selectedRowId === row.id ? <span className="row-table-arrow"><FaArrowRight  /></span> : null}
                    </div>

                    <EditableField
                        value={row.articleNo}
                        onChange={(e) => changeField(row.id, "articleNo", e.target.value)}
                    />

                    <EditableField
                        value={row.productService}
                        onChange={(e) => changeField(row.id, "productService", e.target.value)}
                        fieldClassName="wide-cell"
                    />

                    <EditableField
                        value={row.inPrice}
                        onChange={(e) => changeField(row.id, "inPrice", e.target.value)}
                    />

                    <EditableField
                        value={row.price}
                        onChange={(e) => changeField(row.id, "price", e.target.value)}
                    />

                    <EditableField
                        value={row.unit}
                        onChange={(e) => changeField(row.id, "unit", e.target.value)}
                    />

                    <EditableField
                        value={row.inStock}
                        onChange={(e) => changeField(row.id, "inStock", e.target.value)}
                    />

                    <EditableField
                        value={row.description}
                        onChange={(e) => changeField(row.id, "description", e.target.value)}
                        fieldClassName="wide-cell"
                    />

                    {renderRowActions(row.id)}
                </div>
            ))}
        </div>
    );
}

export default ProductListTableDesktop;