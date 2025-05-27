"use client";

import React from "react";
import Image from "next/image";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="about-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about.jpg"
                  alt="image"
                  width={600}
                  height={617}
                />

                <div className="shape5">
                  <Image
                    src="/images/shape/shape5.png"
                    alt="image"
                    width={90}
                    height={74}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">ABOUT US</span>
                <h2>Real Results. Real Growth. REAL REACH.</h2>
                <p>
                  REAL REACH is a performance-driven digital marketing agency
                  focused on helping real estate businesses dominate online.
                  Founded by seasoned marketing and SEO professionals, we bring
                  a proven system that blends technical precision, compelling
                  content, and result-oriented strategies. Our core mission is
                  to empower real estate brands with digital tools to generate
                  qualified leads, build lasting authority, and drive measurable
                  sales growth.
                </p>

                <ul className="features-list">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/icon4.svg"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Customized Strategies</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/icon5.svg"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Expert Team</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/icon6.svg"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Rapid Results</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/icon7.svg"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Transparent Reporting</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="awards-list">
            <h4>We’ve worked with industry leaders such as :</h4>
            <div className="row justify-content-center mb-5">
              <div className="col-lg-2 col-4 col-sm-4 col-md-3">
                <div className="awards-box">
                  <Image
                    src="/images/awards/award7.svg"
                    alt="image"
                    width={100}
                    height={77}
                  />
                </div>
              </div>
              <div className="col-lg-2 col-4 col-sm-4 col-md-3">
                <div className="awards-box">
                  <Image
                    src="/images/awards/award1.svg"
                    alt="image"
                    width={100}
                    height={77}
                  />
                </div>
              </div>
              <div className="col-lg-2 col-4 col-sm-4 col-md-3">
                <div className="awards-box">
                  <Image
                    src="/images/awards/award2.svg"
                    alt="image"
                    width={100}
                    height={77}
                  />
                </div>
              </div>
              <div className="col-lg-2 col-4 col-sm-4 col-md-3">
                <div className="awards-box">
                  <Image
                    src="/images/awards/award4.svg"
                    alt="image"
                    width={100}
                    height={77}
                  />
                </div>
              </div>
              <div className="col-lg-2 col-4 col-sm-4 col-md-3">
                <div className="awards-box">
                  <Image
                    src="/images/awards/award5.svg"
                    alt="image"
                    width={100}
                    height={77}
                  />
                </div>
              </div>
              <div className="col-lg-2 col-4 col-sm-4 col-md-3">
                <div className="awards-box">
                  <Image
                    src="/images/awards/award6.svg"
                    alt="image"
                    width={100}
                    height={77}
                  />
                </div>
              </div>
            </div>
            <p className="font-weight-bold">
              With a portfolio spanning over 350+ successful projects, we
              deliver tailored digital strategies built around performance and
              growth
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
