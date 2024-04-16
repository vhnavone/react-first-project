import React from 'react';

const Button = ( {onClick = () => alert("No function"), text = "Click me"}) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
};

export default Button;