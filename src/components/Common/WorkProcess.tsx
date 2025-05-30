"use client";
  
import React from "react";
import Image from "next/image";

const WorkProcess: React.FC = () => {
  return (
    <>
      <div className="process-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR PROCESS</span>
            <h2>How We Works?</h2>
          </div>

          <div className="process-inner">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-process-box">
                  <div className="icon">
                    <Image
                      src="/images/icon/icon14.png"
                      alt="image"
                      width={150}
                      height={145}
                    />
                  </div>
                  <h3>Select Your Service</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-process-box">
                  <div className="icon">
                    <Image
                      src="/images/icon/icon15.png"
                      alt="image"
                      width={150}
                      height={145}
                    />
                  </div>
                  <h3>Optimizations</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-process-box">
                  <div className="icon">
                    <Image
                      src="/images/icon/icon16.png"
                      alt="image"
                      width={150}
                      height={145}
                    />
                  </div>
                  <h3>We&apos;ve Got Your Back</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
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

export default WorkProcess;
