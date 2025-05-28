"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const ClientsFeedbackStyle2: React.FC = () => {
  return (
    <>
      <div className="feedback-area bg-gradient-image-feedback pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">CLIENT&apos;S FEEDBACK</span>
            {/* <h2>What Our Client&apos;s Say</h2> */}
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  REAL REACH transformed our online performance. From day one,
                  they brought clarity, results, and serious ROI.&quot; – Durmus
                  Ozgen, TrustUnited.com
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/durmus.png"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>Dormush Ozcan</h3>
                      <span>CEO, TrustUnited.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-fill"></i>
                </div>
                <p>
                  Their team rebuilt our digital presence and delivered
                  leads faster than we imagined. Highly recommended. –
                  Savillas.ae
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/savills.png"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>Savillas</h3>
                      <span>CEO </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-feedback-box">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-fill"></i>
                </div>
                <p>
                  Professional, creative, responsive. A complete digital growth
                  team. – Cameron Deggin, PropertyTurkey.com
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/Cameron Deggin.jpeg"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3> Cameron Deggin</h3>
                      <span>CEO PropertyTurkey.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ClientsFeedbackStyle2;
