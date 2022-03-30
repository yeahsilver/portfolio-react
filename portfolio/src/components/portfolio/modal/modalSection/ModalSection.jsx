import React from 'react';
import "./modalSection.css";

const ModalSection = ( {text} ) => {
    return (
        <div className="modalSection__container">
            <div className="modalSection__circle" />
            <h3> {text} </h3>
        </div>
    )
}

export default ModalSection;