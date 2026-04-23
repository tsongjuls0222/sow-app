import {
  FaCoins,
  FaBalanceScale,
  FaWarehouse,
  FaAlignLeft,
  FaArrowRight,
  FaArrowDown 
} from "react-icons/fa";

function ProductListTableTablet({products, EditableField, selectedRowId, setSelectedRowId, changeField, renderRowActions}) {
    return (
        <div className="my-table-tablet">
            <div className="tablet-my-table-header">
                <div />
                <div>Article No. <FaArrowDown  /></div>
                <div>Product/Service <FaArrowDown  /></div>
                <div><FaCoins className="my-table-head-icon" /> In Price</div>
                <div><FaCoins className="my-table-head-icon" /> Price</div>
                <div><FaBalanceScale className="my-table-head-icon" /> Unit</div>
            </div>

            {products.map((row) => (
                <div className={`tablet-my-table-row ${selectedRowId === row.id ? "selected" : ""}`} key={row.id} onClick={() => setSelectedRowId(row.id)}>
                    <div className="tablet-arrow-space">
                        {selectedRowId === row.id ? <span className="row-table-arrow"><FaArrowRight /></span> : null}
                    </div>

                    <EditableField
                        value={row.article_no}
                        onChange={(e) => changeField(row.id, "article_no", e.target.value)}
                    />

                    <EditableField
                        value={row.name}
                        onChange={(e) => changeField(row.id, "name", e.target.value)}
                    />

                    <EditableField
                        value={row.price}
                        onChange={(e) => changeField(row.id, "price", e.target.value)}
                    />

                    <EditableField
                        value={row.stock}
                        onChange={(e) => changeField(row.id, "stock", e.target.value)}
                    />

                    <div className="tablet-unit-actions">
                        <EditableField
                            value={row.unit}
                            onChange={(e) => changeField(row.id, "unit", e.target.value)}
                        />
                        {renderRowActions(row)}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductListTableTablet;