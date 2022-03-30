import React from 'react';
import './tag.css';

const Tag = ({ text }) => {
    return( 
        <a className="tag__container"> {text} </a>
    );
}

export default Tag;