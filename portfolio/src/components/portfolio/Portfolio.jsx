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
import { AiFillApple, AiFillHtml5 } from 'react-icons/ai';
import { FaSwift, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';

const Portfolio = () => {
    return (
        <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {
               data.map(( { id, image, title, summary, github, stacks }) => {
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
        title: "운동 포스터 제작 iOS 어플리케이션, Bodymood",
        github: "https://github.com/depromeet/bodymood-iOS",
        summary: "https://loud-icebreaker-5aa.notion.site/Bodymood-0769ce7db31d4229a27cdcf186bb4815",
        stacks: ["iOS", "Swift"]
    },
    {
        id: 2,
        image: IMG2,
        title: "We keep in touch, WEKIT",
        github: "",
        summary: "https://loud-icebreaker-5aa.notion.site/We-Keep-in-Touch-WEKIT-ddad61d6ffae4f15ac9474649a4812b1",
        stacks: ["iOS", "Swift"]
    },
    {
        id: 3,
        image: IMG3,
        title: "원격 회전캠 비대면 감독 웹 플랫폼, Camtact",
        github: "https://github.com/2020pingus/camtact_document",
        summary: "https://loud-icebreaker-5aa.notion.site/Camtact-14aa256e7ab8404cae72d737aa5e2168",
        stacks: ["react", "tailwind"]
    },
    {
        id: 4,
        image: IMG4,
        title: "아이트래킹 기반 온라인 시험 부정행위 방지 앱, imonitor",
        github: "https://github.com/SSU-IMonitor/imonitor-app",
        summary: "https://loud-icebreaker-5aa.notion.site/c8903224a24440b8a96afa2684ceddbf",
        stacks: ["iOS", "Swift"]
    },
    {
        id: 5,
        image: IMG5,
        title: "모두의 헬스케어 비서, MOBI",
        github: "https://github.com/yeahsilver/MOBI",
        summary: "https://loud-icebreaker-5aa.notion.site/MOBI-f0739b9bf78e4501bc838426eadd8806",
        stacks: ["android", "java"]
    },
    {
        id: 6,
        image: IMG6,
        title: "비대면 멘토링 웹사이트, OpenStudy",
        github: "https://github.com/HamInKyou/openstudy",
        summary: "https://loud-icebreaker-5aa.notion.site/Open-Study-d3559845c072421bb6d94aca1a1ed6e5",
        stack: ["html", "CSS", "Bootstrap"]
    },
    {
        id: 7,
        image: IMG7,
        title: "학생회 복지사업 웹사이트",
        github: "https://github.com/jjong0225/HBW",
        summary: "https://loud-icebreaker-5aa.notion.site/b2b71b5c854240e599bf1143ee16fa9b",
        stack: ["html", "CSS", "Bootstrap"]
    },
    {
        id: 8,
        image: IMG8,
        title: "시각장애인용 경로 유도 로봇 (특허)",
        github: "",
        summary: "https://loud-icebreaker-5aa.notion.site/ed8bce8d697445d3b764e1d72d97d42b",
        stacks: ["patent"]
    }
]

export default Portfolio