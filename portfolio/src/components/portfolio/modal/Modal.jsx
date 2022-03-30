import React from 'react';
import "./modal.css"
import "./HorizontalLine";

import { AiFillApple, AiFillHtml5 } from 'react-icons/ai';
import { FaSwift, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { render } from '@testing-library/react';

import HorizontalLine from './HorizontalLine';
import ModalSection from './modalSection/ModalSection';

const Modal = ({ props }) => {
    const stackItems = props.stacks.map((stack) => 
        <a key={stack} className="modal__stack"> {stack} </a>
        
    )
    return (
        <div id="modal" className="modal__container">
            <div className="modal__image">
                <img src={props.image} alt=""/>
            </div>

            <div className="modal__body">
                <a className="modal__title">{props.title}</a>
                <div className="modal__stacks">
                    { stackItems }
                </div>
                <HorizontalLine />

                <div className="modal__content">
                    <ModalSection text= "개요" />
                    <h4>{props.content}</h4>
                </div>
                
            </div>
        </div>
    )
}

export default Modal;