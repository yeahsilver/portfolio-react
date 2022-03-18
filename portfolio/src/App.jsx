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
            <Header/>
            <About />
            <Awards />
            <Experience />
            <Portfolio />
            <Activity />
            <Footer />
        </>
    )
}

export default App