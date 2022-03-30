import React, { useState, useCallback } from 'react'
import './portfolio.css'
import Modal from "react-modal";
import ModalContent from './modal/Modal';

import IMG1 from '../../assets/bodymood.png';
import IMG2 from '../../assets/wekit.png';
import IMG3 from '../../assets/camtact.png';
import IMG4 from '../../assets/imonitor.png';
import IMG5 from '../../assets/mobi.png';
import IMG6 from '../../assets/openstudy.png';
import IMG7 from '../../assets/support.png';
import IMG8 from '../../assets/patent.png';

const Portfolio = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const modalStyle = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(15, 15, 15, 0.2)",
        },
        content: {
            position: "absolute",
            top: "60px",
            left: "25%",
            width: "50%",
            height: "80%",
            border: "1px solid var(--color-primary)",
            background: "var(--color-bg-variant)",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
            borderRadius: "2rem",
        }
    }

    return (
        <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {
               data.map((value) => {
                   return (
                        <article key={value.id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={value.image} alt=""/>
                            </div>

                            <div className="portfolio__item-title">
                                <h3>{value.title}</h3>
                            </div>
                            
                            <div className="portfolio__item-cta">
                                <a 
                                    onClick={ () => {
                                            setModalOpen(true);
                                            setModalData(value);
                                        }
                                    } 

                                    className={value.summary==="" ? "btn btn-inactive" : "btn"}
                                > Summary </a>
                               <Modal 
                                    isOpen={isModalOpen}
                                    ariaHideApp={false}
                                    onRequestClose={() => setModalOpen(false)}
                                    style ={modalStyle}
                               >
                                   <ModalContent props={ modalData } />
                                </Modal>
                                <a href={value.github==="" ? null : value.github} className={value.github==="" ? "btn btn-inactive" : "btn btn-primary"} target="_blank">Github</a>
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
        content: "오늘도 헬스장 출첵 성공!\n헬스장에서 오늘 하루를 마무리 지으셨다면,\n그 마무리를 Bodymood가 멋진 한 장의 포스터로 만들어 드릴게요.🙂\nBodymood는 운동 내용을 기록하고 오늘의 감정을 담아 포스터로 만들어주는 이미지 제작 툴입니다.\n운동이 잘 됐을 때, 안 됐을 때, 뿌듯할 때, 아쉬울 때,\n그 날의 감정까지 담겨있는 Bodymood 한 장 만들어보고 가시는 건 어떨까요?",
        github: "https://github.com/depromeet/bodymood-iOS",
        summary: "https://loud-icebreaker-5aa.notion.site/Bodymood-0769ce7db31d4229a27cdcf186bb4815",
        stacks: ["iOS", "Swift"]
    },
    {
        id: 2,
        image: IMG2,
        title: "We keep in touch, WEKIT",
        content: `해당 프로젝트는 나 홀로 목표 달성을 하기 힘들고 막막하신 분들, 라이프 개선의 의지를 가진 수 많은 사람들을 위한 플랫폼이다.
4~6명으로 이루어진 소수 정예 그룹을 생성하여 채팅 기능을 통해 서로 소통하며 목표 달성에 성공하자는 취지로 개발하였다.
또한 Moment라는 인증 일기 기능을 가지고 있어, 기록하고 싶은 순간들을 등록하여, 지금까지 등록한 인증 일기를 한번에 모아볼 수 있다.`,
        github: "",
        summary: "https://loud-icebreaker-5aa.notion.site/We-Keep-in-Touch-WEKIT-ddad61d6ffae4f15ac9474649a4812b1",
        stacks: ["iOS", "Swift"]
    },
    {
        id: 3,
        image: IMG3,
        title: "원격 회전캠 비대면 감독 웹 플랫폼, Camtact",
        content: `부정 행위들은 기존에 있는 웹캠을 이용한 시험 응시자의 부정행위를 감지하는 플랫폼들을 이용하여 방지할 수 있다. 하지만 기존 웹캠은 보지 못하는 구역이 고정되어 있다는 한계가 있다. 발견하기 힘들고 정확한 증거가 없어 발각되지 않았을 뿐 이를 이용한 부정 행위는 여전히 존재한다. 

위의 문제를 해결하기 위해 360도 회전하는 웹캠을 통해 이전의 웹캠의 한계를 보완함으로써 비대면 시험의 공정성을 확보하기 위해 프로젝트를 고안하였다.`,
        github: "https://github.com/2020pingus/camtact_document",
        summary: "https://loud-icebreaker-5aa.notion.site/Camtact-14aa256e7ab8404cae72d737aa5e2168",
        stacks: ["react", "tailwind"]
    },
    {
        id: 4,
        image: IMG4,
        title: "아이트래킹 기반 온라인 시험 부정행위 방지 앱, imonitor",
        content: `최근 코로나19로 인해 언택트 기술의 중요성과 사용 범위가 점점 확대되고 있다. 특히 교육 분야에서 언택트 기술을 빈번하게 사용하는 것을 볼 수 있는데, 그 예시로는 비대면 수업, 그리고 시험 등이 있다. 

여기서 문제가 되는 부분은 비대면 시험이 부정행위로 악용된다는 것이다. 부정행위를 방지하기 위해, 해당 프로젝트는 시선 인식 기술을 도입하여, 시험이 시작되고 종료될 때 까지 모바일 기기에서 시선이 이탈되는 횟수를 계산하여 부정행위 여부를 체크하는 기능을 가진 앱이다.`,
        github: "https://github.com/SSU-IMonitor/imonitor-app",
        summary: "https://loud-icebreaker-5aa.notion.site/c8903224a24440b8a96afa2684ceddbf",
        stacks: ["iOS", "Swift"]
    },
    {
        id: 5,
        image: IMG5,
        title: "모두의 헬스케어 비서, MOBI",
        content: `MOBI란 일상생활에서 편리하게 식이관리를 할 수 있도록 도와주는 어플리케이션이다. 키와 몸무게, 활동량을 통해 BMI 지수를 계산할 수 있고, 각 식품의 영양성분표를 사진으로 찍으면 텍스트 인식을 하여 하루동안 어떤 영양 성분을 얼마나 섭취했는지 관리해주는 기능을 가지고 있다.`,
        github: "https://github.com/yeahsilver/MOBI",
        summary: "https://loud-icebreaker-5aa.notion.site/MOBI-f0739b9bf78e4501bc838426eadd8806",
        stacks: ["android", "java"]
    },
    {
        id: 6,
        image: IMG6,
        title: "비대면 멘토링 웹사이트, OpenStudy",
        content: "온라인상에서 같은 주제를 가지고 공개 또는 비공개 스터디 그룹을 운영하여 사용자들에게 보다 많은 지식을 공유할 수 있는 플랫폼이다.",
        github: "https://github.com/HamInKyou/openstudy",
        summary: "https://loud-icebreaker-5aa.notion.site/Open-Study-d3559845c072421bb6d94aca1a1ed6e5",
        stack: ["html", "CSS", "Bootstrap"]
    },
    {
        id: 7,
        image: IMG7,
        title: "숭실대학교 소프트웨어학부 복지사업 웹 사이트",
        content: `해당 프로젝트는 숭실대학교 소프트웨어학부 학생들을 위한 복지사업 웹 프로젝트이며, 복지사업 물품 예약, 온라인 건의함 활성화, 실습실 사용현황 정보 제공, 실습실 예약 서비스, 전체 예약 서비스 정보 제공의 기능이 포함되어있다.`,
        github: "https://github.com/jjong0225/HBW",
        summary: "https://loud-icebreaker-5aa.notion.site/b2b71b5c854240e599bf1143ee16fa9b",
        stack: ["html", "CSS", "Bootstrap"]
    },
    {
        id: 8,
        image: IMG8,
        title: "시각장애인용 경로 유도 로봇 (특허)",
        content: `시각장애인 경로 유도 로봇은 전방의 장애물을 센싱하는 장애물 센서, 도로면(road surface)으로부터 안전 유도 블록을 센싱하는 도로 센서, 상기 장애물 센서에 의해 사용자의 전방에 대해 센싱된 장애물에 관한 장애물 정보를 생성하고, 상기 센싱된 안전 유도 블록에 기초하여 경로 유도 정보를 생성하는 처리부, 상기 경로 유도 정보에 기초하여 주행하도록 구성되는 바퀴 및 주행 모터를 포함하는 주행부, 진동 모터를 포함하고,상기 진동 모터의 진동을 통해 상기 장애물 정보를 사용자에게 전달하는 손잡이부, 및 상기 손잡이부 및 상기 주행부를 연결하는 지지 부재를 포함한다.`,
        github: "",
        summary: "https://loud-icebreaker-5aa.notion.site/ed8bce8d697445d3b764e1d72d97d42b",
        stacks: ["patent"]
    }
]

export default Portfolio