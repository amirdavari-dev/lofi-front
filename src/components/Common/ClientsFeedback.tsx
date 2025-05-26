"use client";

import React from "react";
import Image from "next/image";

const ClientsFeedback: React.FC = () => {
  return (
    <>
      <div className="feedback-area bg-main-color">
        <div className="container">
          <div className="section-title">
            <h2>WHAT OUR CLIENTS SAY</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-feedback-box with-boxshadow">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  REAL REACH transformed our website traffic and helped us rank
                  on Google’s first page. Our sales increased significantly
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/durmus.png"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>Dormush Ozcan</h3>
                      <span>CEO, TrustUnited.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feedback-box with-boxshadow">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p>
                  I can say my company’s online presence is in safe hands with
                  Real Reach’s strong team, responsibility and proactivity are
                  what makes them different, and we are glad to have them on our
                  side.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/Cameron Deggin.jpeg"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>Cameron Deggin</h3>
                      <span>CEO PropertyTurkey.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feedback-box with-boxshadow">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <p>
                  Professional, results-oriented, and reliable. Highly recommend
                  REAL REACH’s SEO and marketing services.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/resul.jpg"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>Rasool Chichen</h3>
                      <span>CEO AZPO.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-feedback-box with-boxshadow">
                <div className="rating">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <p>
                  Thanks to REAL REACH’s performance marketing, our leads have
                  doubled, reducing our reliance on paid real estate portals
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/user/HAYRI YILDIRIM.jpg"
                      alt="image"
                      width={300}
                      height={300}
                    />
                    <div className="title">
                      <h3>Hayri yildirim</h3>
                      <span>Maneger AZPO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsFeedback;
