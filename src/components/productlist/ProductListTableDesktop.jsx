import {
  FaCoins,
  FaBalanceScale,
  FaWarehouse,
  FaAlignLeft,
  FaArrowRight,
  FaArrowDown 
} from "react-icons/fa";

function ProductListTableDesktop({products, EditableField, selectedRowId, setSelectedRowId, changeField, saveField, renderRowActions}) {
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
                        row={row}
                        id={row.id}
                        field="article_no"
                        value={row.article_no}
                        onChange={(value) => changeField(row.id, "article_no", value)}
                        onSave={saveField}
                    />

                    <EditableField
                        row={row}
                        id={row.id}
                        field="name"
                        value={row.name}
                        onChange={(value) => changeField(row.id, "name", value)}
                        onSave={saveField}
                        fieldClassName="wide-cell"
                    />

                    <EditableField
                        row={row}
                        id={row.id}
                        field="in_price"
                        value={row.in_price}
                        onChange={(value) => changeField(row.id, "in_price", value)}
                        onSave={saveField}
                    />

                    <EditableField
                        row={row}
                        id={row.id}
                        field="price"
                        value={row.price}
                        onChange={(value) => changeField(row.id, "price", value)}
                        onSave={saveField}
                    />

                    <EditableField
                        row={row}
                        id={row.id}
                        field="unit"
                        value={row.unit}
                        onChange={(value) => changeField(row.id, "unit", value)}
                        onSave={saveField}
                    />

                    <EditableField
                        row={row}
                        id={row.id}
                        field="stock"
                        value={row.stock}
                        onChange={(value) => changeField(row.id, "stock", value)}
                        onSave={saveField}
                    />

                    <EditableField
                        row={row}
                        id={row.id}
                        field="description"
                        value={row.description}
                        onChange={(value) => changeField(row.id, "description", value)}
                        onSave={saveField}
                        fieldClassName="wide-cell"
                    />

                    {renderRowActions(row)}
                </div>
            ))}
        </div>
    );
}

export default ProductListTableDesktop;