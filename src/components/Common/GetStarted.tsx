"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const GetStarted: React.FC = () => {
  return (
    <>
      <div className="get-started-area bg-gradient-image pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="get-started-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/man.png"
                  alt="image"
                  width={423}
                  height={590}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="get-started-content">
                <span className="sub-title"> READY TO GET STARTED?</span>
                <h2>Let&apos;s Build Something Amazing Togethe</h2>
                <p>
                  Whether you&apos;re looking to scale your traffic, boost lead
                  quality, or build a brand that converts—REAL REACH is ready to
                  help.
                </p>

                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
