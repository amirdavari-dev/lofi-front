"use client";

import React from "react";
import PartnerSlider from "./PartnerSlider";

const PartnerArea: React.FC = () => {
  return (
    <>
      <div className="partner-area pt-100">
        <div className="container">
          <div className="section-title style-two">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <span className="sub-title">OUR PARTNERS</span>
                <h2>
                  A Trusted Partner <br /> For Ambitious Brands
                </h2>
              </div>
              <div className="col-lg-7 col-md-12">
                <p>
                  We believe in long-term partnerships over one-time projects.
                  Our results speak for themselves—and so do our clients. From
                  scaling SEO for legacy brands to building new online authority
                  from scratch, we’re proud to work with companies who are as
                  driven as we are.
                </p>
              </div>
            </div>
          </div>

          <PartnerSlider />
        </div>
      </div>
    </>
  );
};

export default PartnerArea;
