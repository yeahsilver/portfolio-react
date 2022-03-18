import React, { useEffect } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Awards from './components/awards/Awards'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Activity from './components/activity/Activity'
import Footer from './components/footer/Footer'

import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {

    useEffect(() => {
        AOS.init();
    })

    return(
        <>
        <div 
           data-aos="slide-up"
           data-aos-offset="100"
           data-aos-delay="10"
           data-aos-duration="500"
           data-aos-mirror="true"
           data-aos-once="false"
           data-aos-anchor-placement="top-center"
        >
            <Header/>
        </div>

        <div 
           data-aos="fade-up"
           data-aos-offset="100"
           data-aos-delay="10"
           data-aos-duration="500"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
           data-aos-anchor-placement="top-center"
        >
            <About />
        </div>

        <div 
           data-aos="slide-left"
           data-aos-offset="200"
           data-aos-delay="10"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
           data-aos-anchor-placement="top-center"
        >
            <Awards />
        </div>

        <div 
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="10"
           data-aos-duration="500"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
           data-aos-anchor-placement="top-center"
        >
            <Experience />
        </div>

        <div 
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="10"
           data-aos-duration="500"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
           data-aos-anchor-placement="top-center"
        >
            <Portfolio />
        </div>

        <div 
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="0"
           data-aos-duration="500"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
           data-aos-anchor-placement="top-center"
        >
            <Activity />
        </div>

        <Footer />
        </>
    )
}

export default App