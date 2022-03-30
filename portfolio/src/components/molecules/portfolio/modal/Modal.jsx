import React from 'react';
import "./modal.css"
import "../../../atomics/horizontal-line/HorizontalLine";

import { AiFillApple, AiFillHtml5 } from 'react-icons/ai';
import { FaSwift, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { render } from '@testing-library/react';

import Tag from '../../../atomics/Tag/Tag';
import HorizontalLine from '../../../atomics/horizontal-line/HorizontalLine';
import ListTitle from '../../../atomics/ListTitle/ListTitle';

const Modal = ({ props }) => {
    const stackItems = props.stacks.map((stack) => 
        <Tag text={stack} />
    )
    return (
        <div id="modal" className="modal__container">
            <div className="modal__image">
                <img src={props.image} alt=""/>
            </div>

            <div className="modal__header">
                    <a className="modal__title">{props.title}</a>
                    <a className="modal__date">{props.date}</a>
                    <div className="modal__stacks">
                        { stackItems }
                    </div>
                    <HorizontalLine />
                </div>

            <div className="modal__body">
                <div className="modal__content">
                    <ListTitle text= "개요" />
                    <h4>{props.content}</h4>
                </div>
                
                { props.github==="" ? null : 
                     <div className="modal__link">
                        <ListTitle text="링크" />
                        <h4>{props.github}</h4>
                    </div>
                }
               
            </div>
        </div>
    )
}

export default Modal;