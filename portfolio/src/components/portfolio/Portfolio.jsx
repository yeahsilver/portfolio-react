import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/bodymood.png';
import IMG2 from '../../assets/wekit.png';
import IMG3 from '../../assets/camtact.png';
import IMG4 from '../../assets/imonitor.png';
import IMG5 from '../../assets/mobi.png';
import IMG6 from '../../assets/openstudy.png';
import IMG7 from '../../assets/support.png';
import IMG8 from '../../assets/patent.png';

const Portfolio = () => {
    return (
        <section id="portfolio">Portfolio
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {
               data.map(( { id, image, title, summary, github }) => {
                   return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt=""/>
                            </div>
            
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={summary==="" ? null : summary} className={summary==="" ? "btn btn-inactive" : "btn"} target='_blank'>Summary</a>
                                <a href={github==="" ? null : github} className={github==="" ? "btn btn-inactive" : "btn btn-primary"} target="_blank">Github</a>
                            </div>
                        </article>
                   )
               })
           }
        </div>
        </section>
    )
}

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Bodymood",
        github: "https://github.com//depromeet/bodymood",
        summary: "",
    },
    {
        id: 2,
        image: IMG2,
        title: "Wekit",
        github: "",
        summary: "",
    },
    {
        id: 3,
        image: IMG3,
        title: "Camtact",
        github: "",
        summary: "",
    },
    {
        id: 4,
        image: IMG4,
        title: "imonitor",
        github: "",
        summary: "",
    },
    {
        id: 5,
        image: IMG5,
        title: "Mobi",
        github: "",
        summary: "",
    },
    {
        id: 6,
        image: IMG6,
        title: "OpenStudy",
        github: "",
        summary: "",
    },
    {
        id: 7,
        image: IMG7,
        title: "Support",
        github: "",
        summary: "",
    },
    {
        id: 8,
        image: IMG8,
        title: "Patent",
        github: "",
        summary: "",
    }
]

export default Portfolio