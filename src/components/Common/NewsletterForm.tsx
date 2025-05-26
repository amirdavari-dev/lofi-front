"use client";

import React from "react";

const NewsletterForm: React.FC = () => {
  return (
    <>
      <div className="subscribe-area pb-100">
        <div className="container">
          <div className="subscribe-inner">
            <span className="sub-title">READY TO BOOST YOUR SALES?</span>
            <h2>Subscribe to Our Real Estate Marketing Newsletter</h2>
            <p>
              Receive expert tips, industry news, and marketing strategies
              directly to your inbox.
            </p>

            <form className="newsletter-form">
              <input
                type="email"
                className="input-newsletter"
                placeholder="Enter your email address"
                name="EMAIL"
                required
              />
              <button type="submit">
                Subscribe Now <i className="ri-arrow-right-s-line"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
