"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CaseStudiesCard: React.FC = () => {
  return (
    <>
      <div className="case-studies-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR CASE STUDIES</span>
            <h2>We Get You Higher Revenues, Not Just Higher Ranks</h2>
            <p>
              From web development to SEO and performance marketing, we’ve
              helped brands unlock traffic growth, visibility, and real business
              outcomes.
            </p>
          </div>

          <div className="case-studies-card-box">
            <div className="single-case-studies-box">
              <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    {/* <div className="logo">
                      <Image
                        src="/images/case-studies/Property turkey.png"
                        alt="image"
                        width={91}
                        height={83}
                      />
                    </div> */}
                    <h3>
                      <Link href="/case-studies/property-turkey">Property Turkey</Link>
                    </h3>
                    <p>
                      One of Turkey’s leading platforms for international
                      property buyers, Property Turkey partnered with us to
                      scale qualified leads, build SEO authority, and launch
                      conversion-driven ad campaigns. Together, we built a
                      system that turned their website into a lead-generation
                      machine—boosting both visibility and revenue.
                    </p>
                    <ul className="features-list">
                      <li>
                        <span>FRAMEWORK</span>
                        Angular.js
                      </li>
                      <li>
                        <span>CATEGORY</span>
                        Real estate
                      </li>
                      <li>
                        <span>WEB LINK</span>
                        <a
                          href="https://www.propertyturkey.com"
                          target="_blank"
                        >
                          propertyturkey.com
                        </a>
                      </li>
                    </ul>
                    <Link href="/case-studies/property-turkey" className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>View More
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
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

            <div className="single-case-studies-box">
              <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    {/* <div className="logo">
                      <Image
                        src="/images/case-studies/startp.png"
                        alt="image"
                        width={91}
                        height={83}
                      />
                    </div> */}
                    <h3>
                      <Link style={{pointerEvents: "none"}} href="/case-studies/details">Trust United</Link>
                    </h3>
                    <p>
                      We redesigned and rebuilt the entire website and migrated
                      over 375 properties (with multilingual content and media)
                      while running a performance SEO campaign for real estate
                      buyers in Dubai and Turkey.
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
                    {/* <Link style={{pointerEvents: "none"}} href="/case-studies/details" className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>View More
                    </Link> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
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

            <div className="single-case-studies-box">
              <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    {/* <div className="logo">
                      <Image
                        src="/images/case-studies/edmo.png"
                        alt="image"
                        width={91}
                        height={83}
                      />
                    </div> */}
                    <h3>
                      <Link style={{pointerEvents: "none"}} href="/case-studies/details">
                        Selectum Property
                      </Link>
                    </h3>
                    <p>
                      From UX/UI design to SEO and development, we built a
                      performance-first real estate site with keyword-focused
                      landing pages for property types, cities, and investment
                      guides.
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
                        <a href="https://selectumproperty.com" target="_blank">
                          selectumproperty.com
                        </a>
                      </li>
                    </ul>
                    {/* <Link style={{pointerEvents: "none"}} href="/case-studies/details" className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>View More
                    </Link> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image">
                    <Image
                      src="/images/case-studies/selectum property.png"
                      alt="image"
                      width={860}
                      height={703}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="single-case-studies-box">
              <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    {/* <div className="logo">
                      <Image
                        src="/images/case-studies/edmo.png"
                        alt="image"
                        width={91}
                        height={83}
                      />
                    </div> */}
                    <h3>
                      <Link style={{pointerEvents: "none"}} href="/case-studies/details">Alibaba</Link>
                    </h3>
                    <p>
                      Optimized category and product pages for SEO at scale,
                      focusing on Farsi-language search intent. Traffic grew by
                      68% in six months, increasing inbound leads for travel
                      packages.
                    </p>
                    <ul className="features-list">
                      <li>
                        <span>FRAMEWORK</span>
                        Vue.js
                      </li>
                      <li>
                        <span>CATEGORY</span>
                        Travel & Tourism
                      </li>
                      <li>
                        <span>WEB LINK</span>
                        <a href="https://www.alibaba.ir" target="_blank">
                          alibaba.ir
                        </a>
                      </li>
                    </ul>
                    {/* <Link style={{pointerEvents: "none"}} href="/case-studies/details" className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>View More
                    </Link> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image">
                    <Image
                      src="/images/case-studies/Alibaba.png"
                      alt="image"
                      width={860}
                      height={703}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="single-case-studies-box">
              <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    {/* <div className="logo">
                      <Image
                        src="/images/case-studies/edmo.png"
                        alt="image"
                        width={91}
                        height={83}
                      />
                    </div> */}
                    <h3>
                      <Link style={{pointerEvents: "none"}} href="/case-studies/details">Doctoreto</Link>
                    </h3>
                    <p>
                      We improved local SEO and implemented performance
                      marketing funnels for a leading healthcare portal in Iran,
                      helping boost appointment bookings via organic and paid
                      channels.
                    </p>
                    <ul className="features-list">
                      <li>
                        <span>FRAMEWORK</span>
                        Next.js
                      </li>
                      <li>
                        <span>CATEGORY</span>
                        HealthTech
                      </li>
                      <li>
                        <span>WEB LINK</span>
                        <a href="https://doctoreto.com" target="_blank">
                          doctoreto.com
                        </a>
                      </li>
                    </ul>
                    {/* <Link style={{pointerEvents: "none"}} href="/case-studies/details" className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>View More
                    </Link> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image">
                    <Image
                      src="/images/case-studies/Doctoreto.png"
                      alt="image"
                      width={860}
                      height={703}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="single-case-studies-box">
              <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    {/* <div className="logo">
                      <Image
                        src="/images/case-studies/edmo.png"
                        alt="image"
                        width={91}
                        height={83}
                      />
                    </div> */}
                    <h3>
                      <Link style={{pointerEvents: "none"}} href="/case-studies/details">Sisno Group</Link>
                    </h3>
                    <p>
                      Developed and optimized the Georgian landing pages and
                      implemented multilingual SEO for better targeting of
                      investors from Turkey, Iran, and Russia in the Georgian
                      real estate market.
                    </p>
                    <ul className="features-list">
                      <li>
                        <span>FRAMEWORK</span>
                        WordPress + WPML
                      </li>
                      <li>
                        <span>CATEGORY</span>
                        Real Estate / Investment
                      </li>
                      <li>
                        <span>WEB LINK</span>
                        <a href="https://sisnogroup.ge" target="_blank">
                          sisnogroup.ge
                        </a>
                      </li>
                    </ul>
                    {/* <Link style={{pointerEvents: "none"}} href="/case-studies/details" className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>View More
                    </Link> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image">
                    <Image
                      src="/images/case-studies/Sisnogroup.png"
                      alt="image"
                      width={860}
                      height={703}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesCard;
