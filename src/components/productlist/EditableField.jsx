import { useEffect, useRef, useState } from "react";

function EditableField({row, id, field, value, onChange, onSave, fieldClassName = ""}) {
    const [localValue, setLocalValue] = useState(value ?? "");
    const timerRef = useRef(null);

    useEffect(() => {
        setLocalValue(value ?? "");
    }, [id, field]);

    const handleChange = (e) => {
            const newValue = e.target.value;
            setLocalValue(newValue);
            onChange?.(newValue);
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
            console.log("AUTO SAVE LATEST:", id, field, newValue);
            if (id !== undefined && field && onSave) {
                row[`${field}`] = newValue;
                onSave(row, id, field, newValue);
            }
        }, 700);
    };

    return (
        <input
            className={`cell-input ${fieldClassName}`.trim()}
            value={localValue}
            onChange={handleChange}
        />
    );
}

export default EditableField;