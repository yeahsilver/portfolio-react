import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';

const ContactButton = () => {
    return (
        <div className="contact__button">
        <a href="https://linkedin.com"><BsLinkedin /></a>
        <a href="https://github.com"><FaGithub /></a>
        <a href="https://naver.com"><SiNaver /></a>
        </div>
    )
}

export default ContactButton