import { FaArrowRight, FaArrowDown } from "react-icons/fa";

function ProductListTableMobile({products, EditableField, selectedRowId, setSelectedRowId, changeField, saveField, renderRowActions}) {
    return (
        <div className="my-table-mobile">
            <div className="mobile-my-table-header">
                <div />
                <div>Article No. <FaArrowDown  /></div>
                <div>Product/Service <FaArrowDown  /></div>
                <div />
            </div>

            {products.map((row) => (
                <div className={`mobile-my-table-row ${selectedRowId === row.id ? "selected" : ""}`} key={row.id} onClick={() => setSelectedRowId(row.id)}>
                    <div className="mobile-arrow-col">
                        {selectedRowId === row.id ? <span className="row-table-arrow"><FaArrowRight  /></span> : null}
                    </div>

                    <div className="mobile-product-col">
                        <EditableField
                            row={row}
                            id={row.id}
                            field="name"
                            value={row.name}
                            onChange={(value) => changeField(row.id, "name", value)}
                            onSave={saveField}
                        />
                    </div>

                    <div className="mobile-price-col">
                        <EditableField
                            row={row}
                            id={row.id}
                            field="price"
                            value={row.price}
                            onChange={(value) => changeField(row.id, "price", value)}
                            onSave={saveField}
                        />
                    </div>

                    <div className="mobile-more-col">{renderRowActions(row)}</div>
                </div>
            ))}
        </div>
    );
}

export default ProductListTableMobile;