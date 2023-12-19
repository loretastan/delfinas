import React from 'react';

const TwoPropsComponent = (props) => {
    return (
        <div>
            <h1>{props.text1}</h1>
            <h2>{props.text2}</h2>
        </div>
    );
};

export default TwoPropsComponent;
