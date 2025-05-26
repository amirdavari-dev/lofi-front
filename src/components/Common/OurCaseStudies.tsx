"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const OurCaseStudies: React.FC = () => {
  return (
    <>
      <div className="case-studies-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR CASE STUDIES</span>
            <h2>Proven Results: Higher Traffic, More Sales</h2>
          </div>

          <Swiper
            slidesPerView={1}
            navigation={true}
            spaceBetween={0}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, Navigation]}
            className="case-studies-slides"
          >
            <SwiperSlide>
              <div className="single-case-studies-box">
                <div className="row align-items-center m-0">
                  <div className="col-lg-5 col-md-12 p-0">
                    <div className="content">
                      {/* <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                        <div className="logo">
                          <Image
                            src="/images/case-studies/propertyturkey.png"
                            alt="image"
                            width={91}
                            height={83}
                          />
                        </div>
                      </div> */}
                      <h3>
                        <Link href="/case-studies/details">
                          Property Turkey
                        </Link>
                      </h3>
                      <ul>
                        <li>
                          Achieved 32K+ daily organic visitors and 800M+
                          impressions
                        </li>
                        <li>
                          Improved rankings across high-value real estate
                          keywords
                        </li>
                      </ul>
                      <ul className="features-list">
                        <li>
                          <span>FRAMEWORK</span>
                          Angular.js
                        </li>
                        <li>
                          <span>CATEGORY</span>
                          Real Estate
                        </li>
                        <li>
                          <span>WEB LINK</span>
                          <a href="https://propertyturkey.com" target="_blank">
                            propertyturkey.com
                          </a>
                        </li>
                      </ul>
                      <Link
                        href="/case-studies/details"
                        className="default-btn"
                      >
                        <span className="ri-arrow-right-s-line"></span>View More
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 p-0">
                    <div className="image">
                      <Image
                        src="/images/case-studies/Property turkey.png"
                        alt="image"
                        width={860}
                        height={703}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-case-studies-box">
                <div className="row align-items-center m-0">
                  <div className="col-lg-5 col-md-12 p-0">
                    <div className="content">
                      {/* <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                        <div className="logo">
                          <Image
                            src="/images/case-studies/azpoestate.png"
                            alt="image"
                            width={91}
                            height={83}
                          />
                        </div>
                      </div> */}
                      <h3>
                        <Link href="/case-studies/details">AZPO Estate</Link>
                      </h3>
                      <p>Reopening...</p>
                      <ul className="features-list">
                        <li>
                          <span>FRAMEWORK</span>
                          Next.js
                        </li>
                        <li>
                          <span>CATEGORY</span>
                          Real Estate
                        </li>
                        <li>
                          <span>WEB LINK</span>
                          <a href="https://azpo.com" target="_blank">
                            azpo.com
                          </a>
                        </li>
                      </ul>
                      <Link
                        href="/case-studies/details"
                        className="default-btn"
                      >
                        <span className="ri-arrow-right-s-line"></span>View More
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 p-0">
                    <div className="image">
                      <Image
                        src="/images/case-studies/AZPO Estate.png"
                        alt="image"
                        width={860}
                        height={703}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-case-studies-box">
                <div className="row align-items-center m-0">
                  <div className="col-lg-5 col-md-12 p-0">
                    <div className="content">
                      {/* <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                        <div className="logo">
                          <Image
                            src="/images/case-studies/trust.png"
                            alt="image"
                            width={91}
                            height={83}
                          />
                        </div>
                      </div> */}

                      <h3>
                        <Link href="/case-studies/details">Trust United</Link>
                      </h3>
                      <p>
                        Increased leads by 150% through strategic SEO and PPC
                        campaigns
                      </p>
                      <ul className="features-list">
                        <li>
                          <span>FRAMEWORK</span>
                          Next.js
                        </li>
                        <li>
                          <span>CATEGORY</span>
                          Real Estate
                        </li>
                        <li>
                          <span>WEB LINK</span>
                          <a href="https://trust-united.com" target="_blank">
                            trust-united.com
                          </a>
                        </li>
                      </ul>
                      <Link
                        href="/case-studies/details"
                        className="default-btn"
                      >
                        <span className="ri-arrow-right-s-line"></span>View More
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 p-0">
                    <div className="image">
                      <Image
                        src="/images/case-studies/Turst Unitded.png"
                        alt="image"
                        width={860}
                        height={703}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-case-studies-box">
                <div className="row align-items-center m-0">
                  <div className="col-lg-5 col-md-12 p-0">
                    <div className="content">
                      {/* <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                        <div className="logo">
                          <Image
                            src="/images/case-studies/truecar.jpeg"
                            alt="image"
                            width={91}
                            height={83}
                          />
                        </div>
                      </div> */}
                      <h3>
                        <Link href="/case-studies/details">True Car</Link>
                      </h3>
                      <p>Reopening...</p>
                      <ul className="features-list">
                        <li>
                          <span>FRAMEWORK</span>
                          Next.js
                        </li>
                        <li>
                          <span>CATEGORY</span>
                          Car buying
                        </li>
                        <li>
                          <span>WEB LINK</span>
                          <a href="https://www.truecar.com" target="_blank">
                            www.truecar.com
                          </a>
                        </li>
                      </ul>
                      <Link
                        href="/case-studies/details"
                        className="default-btn"
                      >
                        <span className="ri-arrow-right-s-line"></span>View More
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="image">
                      <Image
                        src="/images/case-studies/truecar.png"
                        alt="image"
                        width={860}
                        height={703}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Shape Image */}
        <div className="shape7">
          <Image
            src="/images/shape/shape5.png"
            alt="image"
            width={90}
            height={74}
          />
        </div>
        <div className="shape8">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={106}
            height={113}
          />
        </div>
      </div>
    </>
  );
};

export default OurCaseStudies;
