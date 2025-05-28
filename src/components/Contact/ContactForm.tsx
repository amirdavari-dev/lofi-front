"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <>
      <div className="contact-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="contact-form">
            <div className="section-title">
              <h2>Let’s Connect</h2>
              <p>Fill out the form and one of our consultants will reach out to you shortly.</p>
            </div>

            <form>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label>Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Phone *</label>
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      placeholder="WhatsApp number or mobile"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      name="text"
                      cols={30}
                      rows={6}
                      className="form-control"
                      placeholder="Let us know what you’re looking for (SEO, website, content, etc.)"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="default-btn">
                    <span className="ri-arrow-right-s-line"></span> Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
