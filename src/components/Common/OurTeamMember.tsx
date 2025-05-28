"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurTeamMember: React.FC = () => {
  return (
    <>
      <div className="team-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="team-member-list">
                <div className="row justify-content-center">
                  <div
                    className="col-lg-4 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <Image
                        src="/images/team/Alisquare.jpg"
                        alt="team"
                        width={684}
                        height={666}
                      />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Ali</h3>
                          <span>CTO & SEO</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <Image
                        src="/images/team/AminSqaure.jpg"
                        alt="team"
                        width={684}
                        height={666}
                      />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Amin</h3>
                          <span>Marketing & Sales</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <Image
                        src="/images/team/default.png"
                        alt="team"
                        width={684}
                        height={666}
                      />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Richard</h3>
                          <span>Content</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="700"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <Image
                        src="/images/team/default.png"
                        alt="team"
                        width={684}
                        height={666}
                      />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Amir</h3>
                          <span>Full-Stack Developer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <Image
                        src="/images/team/default.png"
                        alt="team"
                        width={684}
                        height={666}
                      />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Arshia</h3>
                          <span>Back end Developer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <Image
                        src="/images/team/default.png"
                        alt="team"
                        width={684}
                        height={666}
                      />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Daksh</h3>
                          <span>UI & Ux</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="team-section-title">
                <span className="sub-title">OUR EXPERTS</span>
                <h2>
                  Meet the dedicated professionals behind REAL REACH&apos;s success.
                </h2>
                <Link href="/team" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamMember;
