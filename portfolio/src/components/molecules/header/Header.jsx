import React from 'react'
import './header.css'
import ContactButton from '../../atomics/ContactButton/ContactButton'
import ME from '../../../assets/me.png'

const Header = () => {
    return (
       <header>
          <div className="container header__container">
              <h1> Yeeun Heo</h1> 
              <h5 className="text-light">iOS Developer</h5> 
              
            <ContactButton />
            
            <div className="image__container">
                <div className="me">
                    <img className="center" src={ME} alt="me" />
                </div>
            </div>
          </div>
       </header>
    )
}

export default Header