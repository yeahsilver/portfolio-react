import React from "react";

const HorizontalLine = ({ text }) => {
    const containerStyle = {
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1rem",
        margin: "1rem 0 0.5rem",
    }

    const spanStyle = {
        padding: "0 1rem",
    }

    return (
        <div style = {containerStyle}>
            <span style={spanStyle}></span>
        </div>
    );
};


export default HorizontalLine;