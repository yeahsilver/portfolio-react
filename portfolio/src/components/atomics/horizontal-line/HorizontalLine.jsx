import React from "react";

const HorizontalLine = ({ text }) => {
    const containerStyle = {
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1rem",
        margin: "10px 0 20px",
    }

    const spanStyle = {
        padding: "0 10px",
    }

    return (
        <div style = {containerStyle}>
            <span style={spanStyle}></span>
        </div>
    );
};


export default HorizontalLine;