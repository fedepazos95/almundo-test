import React from 'react';

const Icon = ({ name, size, repeat }) => {
    const svgIcon = require(`../assets/icons/${name}.svg`);
    if (!repeat) {
        repeat = 1;
    }
    return (
        Array.apply(null, { length: repeat }).map((e, i) => (
            <img key={i} src={svgIcon} height={size} width={size} alt={name} style={{ "marginBottom": "5px", "marginRight": "5px" }} />
        ))
    );
}

export default Icon;