"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const ClientsFeedbackStyle2: React.FC = () => {
  return (
    <>
      <div className="feedback-area bg-gradient-image pt-100 pb-70">
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
                      src="/images/user/user1.jpg"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>John Smith</h3>
                      <span>Web Developer</span>
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
                  &ldquo;Their team rebuilt our digital presence and delivered
                  leads faster than we imagined. Highly recommended.&ldquo; –
                  Savillas.ae
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/user2.jpg"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>Sarah Taylor</h3>
                      <span>UX/UI Designer</span>
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
                  team.&quot; – Cameron Deggin, PropertyTurkey.com
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/user4.jpg"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>David Conway</h3>
                      <span>Developer</span>
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
