"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR SERVICES</span>
            <h2>Comprehensive Digital Solutions for Real Estate Businesses</h2>
            <p>
              REAL REACH helps real estate companies maximize their online
              presence, attract international buyers, and grow their business
              effectively.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="services-slides-two"
          >
            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon8.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/services/details">
                      SEO & Content Marketing
                    </Link>
                  </h3>
                </div>
                <p>
                  Boost your organic visibility, drive qualified traffic, and
                  convert visitors into buyers with targeted content strategies.
                </p>
                <Link href="/services/details" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon9.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/services/details">
                      Web Design & Development
                    </Link>
                  </h3>
                </div>
                <p>
                  Create modern, responsive, and SEO-optimized websites built on
                  the latest frameworks like Node.js, Next.js, and Vue.js.
                </p>
                <Link href="/services/details" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon10.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/services/details">Performance Marketing</Link>
                  </h3>
                </div>
                <p>
                  Achieve immediate results through optimized Google Ads, Meta
                  Ads, and TikTok Ads, generating leads from day one.
                </p>
                <Link href="/services/details" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon11.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/services/details">Branding & Identity</Link>
                  </h3>
                </div>
                <p>
                  Stand out with distinctive branding tailored to the
                  international real estate market.
                </p>
                <Link href="/services/details" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon12.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/services/details">
                      Video Production & Photography
                    </Link>
                  </h3>
                </div>
                <p>
                  Showcase your properties with professional videos and photos
                  to attract more qualified buyers
                </p>
                <Link href="/services/details" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon13.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/services/details">CRM & Automation</Link>
                  </h3>
                </div>
                <p>
                  Streamline your sales process with customized CRM solutions
                  and automation for efficient client communication.
                </p>
                <Link href="/services/details" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurServices;
