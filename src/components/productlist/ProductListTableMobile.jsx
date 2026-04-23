import { FaArrowRight, FaArrowDown } from "react-icons/fa";

function ProductListTableMobile({products, EditableField, selectedRowId, setSelectedRowId, changeField, renderRowActions}) {
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
                        <EditableField value={row.name} onChange={(e) => changeField(row.id, "name", e.target.value)} fieldClassName="mobile-wide-input"/>
                    </div>

                    <div className="mobile-price-col">
                        <EditableField value={row.price} onChange={(e) => changeField(row.id, "price", e.target.value)} />
                    </div>

                    <div className="mobile-more-col">{renderRowActions(row)}</div>
                </div>
            ))}
        </div>
    );
}

export default ProductListTableMobile;