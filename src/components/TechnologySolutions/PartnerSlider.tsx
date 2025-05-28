"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const PartnerSlider: React.FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          // 992: {
          //   slidesPerView: 4,
          // },
          // 1024: {
          //   slidesPerView: 6,
          // },
        }}
        modules={[Autoplay]}
        className="partner-slides"
      >
        <SwiperSlide>
          <div className="partner-item">
            <Image
              src="/images/partner/tiktok.svg"
              alt="image"
              width={175}
              height={35}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="partner-item">
            <Image
              src="/images/partner/google-cloud.svg"
              alt="image"
              width={175}
              height={35}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="partner-item">
            <Image
              src="/images/partner/google-partner.svg"
              alt="image"
              width={175}
              height={35}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="partner-item">
            <Image
              src="/images/partner/meta-partner.svg"
              alt="image"
              width={175}
              height={35}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PartnerSlider;
