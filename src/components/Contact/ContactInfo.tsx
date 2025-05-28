"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-contact-info-box text-center">
                <div className="icon">
                  <i className="ri-map-pin-2-line"></i>
                </div>
                <h3>Address:</h3>
                <p>Dubai, UAE | Turkey, istanbul | Europe, Germany</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-contact-info-box text-center">
                <div className="icon">
                  <i className="ri-time-line"></i>
                </div>
                <h3>Working Hours:</h3>
                <p>
                  Monday to Saturday
                  <br />
                  10:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-contact-info-box text-center">
                <div className="icon">
                  <i className="ri-mail-unread-line"></i>
                </div>
                <h3>Email Address:</h3>
                <p>
                  <a href="mailto:info@realreach.eu">info@realreach.eu</a>
                  <br />
                  <a href="mailto:support@realreach.eu">support@realreach.eu</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-contact-info-box text-center">
                <div className="icon">
                  <i className="ri-phone-line"></i>
                </div>
                <h3>Toll Free:</h3>
                <p>
                  <a href="tel:+971 50 4080 6898">+971 50 4080 6898 (UAE)</a>
                  <br />
                  <a href="tel:+90 552 893 65 36">+90 552 893 65 36 (TR)</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
