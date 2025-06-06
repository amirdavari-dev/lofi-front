"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
// import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "@/../public/images/Animation - 1748254043455.json";
const HeroSlider: React.FC = () => {
  return (
    <>
      <div className="home-area">
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="home-slides"
        >
          <SwiperSlide>
            <div className="banner-item">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="home-content">
                      <span className="sub-title">
                        TRUSTED DIGITAL MARKETING AGENCY
                      </span>
                      <h1>
                        Boost Your Real Estate Sales with Proven Digital
                        Strategies
                      </h1>
                      <Link href="/contact" className="default-btn style-two">
                        <span className="ri-arrow-right-s-line"></span>Get
                        Started Now
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="home-image">
                      <Lottie animationData={animationData} loop={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HeroSlider;
