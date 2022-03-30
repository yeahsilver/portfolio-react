import React, { useEffect } from 'react'
import Header from './components/molecules/header/Header'
import About from './components/molecules/about/About'
import Awards from './components/molecules/awards/Awards'
import Experience from './components/molecules/experience/Experience'
import Portfolio from './components/molecules/portfolio/Portfolio'
import Activity from './components/molecules/activity/Activity'
import Footer from './components/molecules/footer/Footer'

const App = () => {

    return(
        <>
            <Header/>
            <About/>
            <Awards />
            <Experience />
            <Portfolio />
            <Activity />
            <Footer />
        </>
    )
}

export default App