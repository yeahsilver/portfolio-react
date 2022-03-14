import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {SiNaver} from 'react-icons/si';

const ContactButton = () => {
    return (
        <div className="contact__button">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://naver.com" target="_blank"><SiNaver /></a>
        </div>
    )
}

export default ContactButton