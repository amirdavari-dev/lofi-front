"use client";
  
import React from "react";
import Image from "next/image";

const OurPlatforms: React.FC = () => {
  return (
    <>
      <div className="platforms-area pb-70">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>Our Platforms</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="platforms-item with-white-color">
                <div className="image">
                  <Image
                    src="/images/crypto-startup/platforms/platforms-1.png"
                    alt="image"
                    width={76}
                    height={76}
                  />
                </div>
                <h3>NFT Marketplace</h3>
                <p>
                  Nulla quis lorem ut libero malesuada feugiat vivamus magna
                  justo lacinia eget consectetur sed convallis at tellus.
                </p>

                <div className="arrow-image">
                  <Image
                    src="/images/crypto-startup/platforms/arrow-3.png"
                    alt="image"
                    width={152}
                    height={136}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="platforms-item with-white-color">
                <div className="image">
                  <Image
                    src="/images/crypto-startup/platforms/platforms-2.png"
                    alt="image"
                    width={76}
                    height={76}
                  />
                </div>
                <h3>Exchange</h3>
                <p>
                  Nulla quis lorem ut libero malesuada feugiat vivamus magna
                  justo lacinia eget consectetur sed convallis at tellus.
                </p>

                <div className="arrow-image">
                  <Image
                    src="/images/crypto-startup/platforms/arrow-4.png"
                    alt="image"
                    width={152}
                    height={136}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="platforms-item with-white-color">
                <div className="image">
                  <Image
                    src="/images/crypto-startup/platforms/platforms-3.png"
                    alt="image"
                    width={76}
                    height={76}
                  />
                </div>
                <h3>Blockchain</h3>
                <p>
                  Nulla quis lorem ut libero malesuada feugiat vivamus magna
                  justo lacinia eget consectetur sed convallis at tellus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPlatforms;
