import React from 'react'
import './activity.css'
import { BsStars } from 'react-icons/bs'

import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

const Activity = () => {
    return (
        <section id="activities">
            <h5>What I have Done</h5>
            <h2>Activities</h2>
            
            <div className="container activities__container">
                <Swiper 
                    className="activity__swiper"
                    effect={"cards"}
                    grapCursor={true}
                    modules={[EffectCards]}
                >
                {
                    data.map(( {type, content, date}, index) => {
                        return (
                            <SwiperSlide key={index} className="activity__swipe-slide">
                                <div className="activity">
                                    <div className="activity__icon">
                                        <BsStars />
                                    </div>

                                    <h3 className="activity__name"> { content } </h3>
                                    <small className="activity__date"> {date} </small>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </div> 
        </section>
    )
}

let awardStyle = {
    color: "yellow"
}

let certificateStyle = {
    color: "orange"
}

const data = [
    {
        content: "IIPT K-SW Square Purdue University 프로그램 (이수 예정)",
        date: "2022.04 ~ 2022.06"
    },
    {
        content: "카카오브레인 Pathfinder 인턴십 (iOS)",
        date: "2021.12 ~ 2022.02"
    }, 
    {
        content: "Woori Digital Academy - Digital Channel Specialist (조교)",
        date: "2021.09 ~ 2021.12"
    },
    {
        content: "인천 관광공사 인천e지 iOS 어플리케이션 Beta Tester",
        date: "2021.05"
    },
    {
        content: "숭실대학교 선배와 함께하는 실전 설계 프로그래밍 멘토링 (멘토)",
        date: "2021.03 ~ 2021.06"
    },
    {
        content: "코코넛 플레이스 창업팀 (iOS)",
        date: "2020.12 ~ 2022.04"
    },
    {
        content: "ITDA 코딩테스트 연합동아리",
        date: "2020.03 ~ 2020.06"
    },
    {
        content: "청년 아이디어톤: 청사진 아이디어톤 참여",
        date: "2019.06"
    }, 
    {
        content: "Malaysia Multimedia University (MMU) 여름방학 해외 교육프로그램 이수",
        date: "2018.07"
    },
    {
        content: "숭실대학교 소프트웨어학부 소모임 ISTeam 부원",
        date: "2018.03 ~"
    }
]

export default Activity