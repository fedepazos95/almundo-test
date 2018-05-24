import React from 'react';

const Icon = ({ name, size, repeat }) => {
    const svgIcon = require(`../assets/icons/${name}.svg`);
    if (!repeat) {
        repeat = 1;
    }
    return (
        Array.apply(null, { length: repeat }).map((e, i) => (
            <img key={i} src={svgIcon} height={size} width={size} alt={name} style={{ "margin-bottom": "5px", "margin-right": "5px" }} />
        ))
    );
}

export default Icon;