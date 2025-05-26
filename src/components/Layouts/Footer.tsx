"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <Link href="/" className="d-inline-block logo-footer">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={350}
                    height={160}
                  />
                </Link>

                <div className="newsletter-form">
                  <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                  <form data-toggle="validator">
                    <input
                      type="email"
                      className="input-newsletter"
                      placeholder="Enter your email"
                      name="EMAIL"
                      required
                    />
                    <button type="submit">
                      Subscribe Now <i className="ri-send-plane-line"></i>
                    </button>
                  </form>
                </div>

                <ul className="social-links">
                 
                  <li>
                    <a
                      href="https://linkedin.com/in/ali-mosadegh-81a0751ba"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/realreach.eu?igsh=OGd3c2s1amxxcXk5"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Services</h3>
                <ul className="services-links">
                  <li>
                    <Link href="/services/details">SEO & Content Marketing</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Web Design & Development</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Performance Marketing</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Branding & Identity</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Video Production & Photography</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Quick Links</h3>
                <ul className="quick-links">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Info</h3>
                <ul className="footer-contact-info">
                  <li>Address: Dubai, UAE | Turkey, istanbul | Europe, Germany</li>
                  <li>
                    Email: <a href="mailto: info@realreach.eu">info@realreach.eu</a>
                  </li>
                  <li>
                    Phone (Dubai): <a href="tel:+971504086898">+971 50 408 6898</a>
                  </li>
                  <li>
                    Phone (Turkey): <a href="tel:+905528935736">+90 552 893 57 36</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-md-6">
                <p>
                  &copy; 2020 - 2025, by RealReach
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
