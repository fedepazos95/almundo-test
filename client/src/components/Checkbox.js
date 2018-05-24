import React from 'react';

const Checkbox = ({ name, id, handleChange, checked, content }) => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" checked={checked} onChange={handleChange} id={id} value={id} name={name} />
            <label className="form-check-label" htmlFor={id}>
                {content}
            </label>
        </div>
    );
}

export default Checkbox;