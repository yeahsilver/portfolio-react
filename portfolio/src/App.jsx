import React, { useEffect } from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Awards from './components/awards/Awards'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Posts from './components/posts/Posts'
import Activity from './components/activity/Activity'
import Footer from './components/footer/Footer'

const App = () => {
    return(
        <>
            <Header/>
            <About/>
            <Awards />
            <Experience />
            <Portfolio />
            {/* <Posts /> */}
            <Activity />
            <Footer />
        </>
    )
}

export default App