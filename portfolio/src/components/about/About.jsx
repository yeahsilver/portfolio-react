import React from 'react'
import './about.css'
import ME_BG from '../../assets/me_background.png'
import { FaSchool } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import { BsFillChatFill } from 'react-icons/bs'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2> About Me</h2>
            
            <div className="container about__container">
                <div className="about__me__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME_BG} alt="About"/>
                    </div>
                </div>
                </div>

                <div className="about__content">
                    <div clasName="about__cards">
                        <article className="about__card">
                            <BsFillChatFill className='about__icon'/>
                            <h5>카카오브레인 ( kakaobrain )</h5>
                            <small>8월 입사 예정</small>
                        </article>

                        <article className="about__card">
                            <FaSchool className='about__icon'/>
                            <h5>숭실대학교 소프트웨어학부</h5>
                            <small>2018.03 ~</small>
                        </article>

                        <article className="about__card">
                            <AiFillMail className='about__icon'/>
                            <h5>yeeun.dev@gmail.com</h5>
                            <small>이메일</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About 