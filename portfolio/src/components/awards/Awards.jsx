import React from 'react'
import './awards.css'
import { BsFillAwardFill } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from 'swiper';

const Awards = () => {
    return (
        <section id="awards">
            <h5>What I have achieved</h5>
            <h2> Awards & Certificates </h2>
                <div className="container awards__container">
                    <Swiper className="awards-swiper"
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2}
                        coverflowEffect={{
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                    >
                        <SwiperSlide className="awards-swiper-slide">
                            <p>안녕</p>
                        </SwiperSlide>
                        <SwiperSlide className="awards-swiper-slide">
                            <p>안녕</p>
                        </SwiperSlide>
                        <SwiperSlide className="awards-swiper-slide">
                            <p>안녕</p>
                        </SwiperSlide>
                        <SwiperSlide className="awards-swiper-slide">
                            <p>안녕</p>
                        </SwiperSlide>
                        <SwiperSlide className="awards-swiper-slide">
                            <p>안녕</p>
                        </SwiperSlide>

                    </Swiper>
                </div>
        </section>
    )
}

const data = [
    {
        type: "certificate",
        content: "정보처리기사 취득",
        date: "2021.06.02"
    },
    {
        type: "award",
        content: "건국대학교 창업지원단 X 칭화대학 기술지주 KU 이너베이션 해커톤 3위",
        date: "2021.01"
    }, 
    {
        type: "ceritificate",
        content: "SQLD 취득",
        date: "2020.10.06"
    },
    {
        type: "award",
        content: "온라인 시험 부정행위 방지 SW 개발 최우수상",
        date: "2020.10"
    },
    {
        type: "award",
        content: "한국IT정책경영학회 학술대회 우수논문 장려상",
        date: "2018.12"
    }
]

export default Awards