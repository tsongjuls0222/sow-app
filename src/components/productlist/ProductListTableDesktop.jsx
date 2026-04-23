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
                <div className={`desktop-my-table-row ${selectedRowId === row.id ? "selected" : ""}`} key={row.id} onClick={() => setSelectedRowId(row)}>
                    <div className="row-table-arrow-cell">
                        {selectedRowId === row.id ? <span className="row-table-arrow"><FaArrowRight  /></span> : null}
                    </div>

                    <EditableField
                        value={row.article_no}
                        onChange={(e) => changeField(row.id, "article_no", e.target.value)}
                    />

                    <EditableField
                        value={row.name}
                        onChange={(e) => changeField(row.id, "name", e.target.value)}
                        fieldClassName="wide-cell"
                    />

                    <EditableField
                        value={row.in_price}
                        onChange={(e) => changeField(row.id, "in_price", e.target.value)}
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
                        value={row.stock}
                        onChange={(e) => changeField(row.id, "stock", e.target.value)}
                    />

                    <EditableField
                        value={row.description}
                        onChange={(e) => changeField(row.id, "description", e.target.value)}
                        fieldClassName="wide-cell"
                    />

                    {renderRowActions(row)}
                </div>
            ))}
        </div>
    );
}

export default ProductListTableDesktop;