"use client";

import React from "react";
import Image from "next/image";

const Process: React.FC = () => {
  return (
    <>
      <div className="process-area">
        <div className="our-service-label-about">
          <span className="sub-title">WHY CHOOSE US</span>
        </div>
        <div className="container">
          <div className="process-inner">
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
                  <div className="icon">
                    <Image
                      src="/images/icon/icon14.png"
                      alt="image"
                      width={150}
                      height={145}
                    />
                  </div>
                  <h3>Brand Strategy</h3>
                  <p>
                    We design every campaign to align with your unique voice and
                    positioning in the real estate market.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
                  <div className="icon">
                    <Image
                      src="/images/icon/icon15.png"
                      alt="image"
                      width={150}
                      height={145}
                    />
                  </div>
                  <h3>Fast Delivery</h3>
                  <p>
                    Agile development and lean marketing processes ensure quick
                    turnaround and go-live.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="single-process-box">
                  <div className="icon">
                    <Image
                      src="/images/icon/icon16.png"
                      alt="image"
                      width={150}
                      height={145}
                    />
                  </div>
                  <h3>Ongoing Reporting</h3>
                  <p>
                    Transparent, regular performance reports so you always know
                    what’s working.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
