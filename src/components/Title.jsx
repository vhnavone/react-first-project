import React from 'react';

const Title = ({text = "Texto por default"}) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

export default Title;