"use client";

import React from "react";
import Image from "next/image";

const FreeSEOQuotesForm: React.FC = () => {
  return (
    <>
      <div className="quote-area">
        <div className="container">
          <div className="quote-content">
            <span className="sub-title">QUOTE</span>
            <h2>FREE SEO & PERFORMANCE AUDIT</h2>
            <p>
              Discover your website’s untapped potential. Get a comprehensive
              analysis and actionable insights.
            </p>

            <form>
              <div className="row">
                <div className="col-lg-4 col-md-3 pr-0">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your website URL"
                    />
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 pl-0">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-3">
                  <button type="submit">
                    Get Report <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="shape11">
          <Image
            src="/images/shape/shape10.png"
            alt="shape"
            width={280}
            height={532}
          />
        </div>
        <div className="shape12">
          <Image
            src="/images/shape/shape11.png"
            alt="shape"
            width={270}
            height={527}
          />
        </div>
      </div>
    </>
  );
};

export default FreeSEOQuotesForm;
