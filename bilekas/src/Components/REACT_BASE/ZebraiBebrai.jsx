import React from 'react';

const ColorfulComponent = (props) => {
    const textColor = props.value === 1 ? 'blue' : 'red';

    return (
        <h1 style={{ color: textColor }}>
            Zebrai ir Bebrai
        </h1>
    );
};

export default ColorfulComponent;
