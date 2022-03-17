import React from 'react'
import './footer.css'
import ContactButton from '../header/ContactButton'
const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Yeeun Heo</a>

            <ul className="links">
                <li><a href="#">Home</a></li>
                <li><a href="#about">about</a> </li>
                <li><a href="#awards">Awards & Certificates</a> </li>
                <li><a href="#experience">Tech Stack</a></li>
                <li><a href="#portfolio">Portfolio</a> </li>
                <li><a href="#activity">Activities</a> </li>
            </ul>

            <div className="footer__contact">
                <ContactButton clasName="footer__contact"/>
            </div>
        </footer>
    )
}

export default Footer