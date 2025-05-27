"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const TeamSlider: React.FC = () => {
  return (
    <>
      <div className="team-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="section-title style-two">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12">
                <span className="sub-title">OUR EXPERTS</span>
                <h2>
                  Meet Our Leadership <br />
                  Behind every result is a strategic team:
                </h2>
              </div>
              {/* <div className="col-lg-7 col-md-12">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters. It is a long established fact
                  that a reader will be distracted by the.
                </p>
              </div> */}
            </div>
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
              576: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="team-slides"
          >
            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-1"
                    style={{ backgroundImage: `url(/images/team/team1.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Ali Reza Mosaddegh</h3>
                  <span>SEO and Paid Ads Manager</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-2"
                    style={{ backgroundImage: `url(/images/team/team2.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Amin Behravan</h3>
                  <span>Digital Marketing & Sales</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-3"
                    style={{ backgroundImage: `url(/images/team/team3.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Richard</h3>
                  <span>Content & Videography</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-4"
                    style={{ backgroundImage: `url(/images/team/team4.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Amir Davari</h3>
                  <span>Full-Stack Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-5"
                    style={{ backgroundImage: `url(/images/team/team5.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Arshia Mehrabi </h3>
                  <span>Back-end Developer</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TeamSlider;
