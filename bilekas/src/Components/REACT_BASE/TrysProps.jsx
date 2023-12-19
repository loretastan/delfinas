import React from 'react';

const ColoredTextComponent = (props) => {
    return (
        <div>
            <h1 style={{ color: props.color }}>{props.text1}</h1>
            <h2 style={{ color: props.color }}>{props.text2}</h2>
        </div>
    );
};

export default ColoredTextComponent;
