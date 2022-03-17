import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import './header.css'

const ContactButton = () => {
    return (
        <div className="contact__button">
            <a href="https://www.linkedin.com/in/yeeun-heo-23a722201/"><BsLinkedin /></a>
            <a href="https://github.com/yeahsilver"><FaGithub /></a>
            <a href="https://blog.naver.com/0_0yeggy"><SiNaver /></a>
        </div>
    )
}

export default ContactButton