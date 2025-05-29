"use client";

import React from "react";
import Image from "next/image";
import { CaseDetailsType } from "../../../constants/case-studies/caseStudyDetailsData";
type Prop = {
  details: CaseDetailsType;
};
const CaseStudiesDetailsContent = ({ details }: Prop) => {
  return (
    <>
      <div className="case-studies-details-area ptb-100">
        <div className="container">
          <div className="case-studies-details-header row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="image">
                <Image
                  src={details.image}
                  alt="image"
                  width={760}
                  height={585}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="content">
                {/* <Image
                  src="/images/case-studies/elan.png"
                  alt="image"
                  width={91}
                  height={83}
                /> */}
                <h1>{details.name}</h1>
                <p>{details.description}</p>
                <ul className="meta">
                  <li>
                    <i className="ri-folder-2-line"></i>
                    <span>APP</span>
                    {details.appType}
                  </li>
                  <li>
                    <i className="ri-price-tag-3-line"></i>
                    <span>CATEGORY</span>
                    {details.category}
                  </li>
                  <li>
                    <i className="ri-global-line"></i>
                    <span>LINK</span>
                    <a href={`https://${details.link}`} target="_blank">
                      {details.link}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="case-studies-details-desc">
            <div className="article-content">
              <div className="row mb-40">
                <div className="col-lg-5 col-md-12">
                  <h2>
                    <span>THE CHALLENGE</span>
                  </h2>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>{details.challenge.label}</h3>
                    <p>{details.challenge.description}</p>
                    <ul>
                      {details.challenge.buletList.map((bulet, index) => {
                        return <li key={index}>{bulet}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row mb-40">
                <div className="col-lg-5 col-md-12">
                  <h2>
                    <span>THE SOLUTION</span>
                  </h2>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>{details.solution.label}</h3>
                    <p>{details.solution.description}</p>
                    <blockquote className="wp-block-quote">
                      <p>{details.solution.blockQutes}</p>
                      {/* <cite>Tom Cruise</cite> */}
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="row mb-40">
                <div className="col-lg-5 col-md-12">
                  <h2>
                    <span>THE RESULT</span>
                  </h2>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="content">
                    <h3>{details.result.label}</h3>
                    <p>{details.result.description}</p>
                    <ul className="wp-block-gallery columns-3">
                      <li className="blocks-gallery-item">
                        <figure>
                          <Image
                            src="/images/services/services1.jpg"
                            alt="image"
                            width={860}
                            height={860}
                          />
                        </figure>
                      </li>
                      <li className="blocks-gallery-item">
                        <figure>
                          <Image
                            src="/images/services/services2.jpg"
                            alt="image"
                            width={860}
                            height={860}
                          />
                        </figure>
                      </li>
                      <li className="blocks-gallery-item">
                        <figure>
                          <Image
                            src="/images/services/services3.jpg"
                            alt="image"
                            width={860}
                            height={860}
                          />
                        </figure>
                      </li>
                    </ul>
                    <div
                      dangerouslySetInnerHTML={{ __html: details.result.table }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="row">
                {details.chart &&
                  (() => {
                    const ChartComponent = details.chart;
                    return <ChartComponent />;
                  })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesDetailsContent;
