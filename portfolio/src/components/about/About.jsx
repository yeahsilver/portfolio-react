import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2> About Me</h2>
            
            <div className="container about__container">
                <div className="about__me__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About"/>
                    </div>
                </div>
                </div>

                <div className="about__content">
                    <div clasName="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>Junior Developer</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Client</h5>
                            <small>iOS Developer</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About 