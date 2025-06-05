"use client";
import Image from "next/image";
import Script from "next/script";
import "@/../styles/css/style.css";
import "@/../styles/css/icofont.min.css";
import "@/../styles/css/magnific-popup.min.css";
import "@/../styles/css/owl.carousel.min.css";
import "@/../styles/css/responsive.css";
import "@/../styles/css/responsive - Copy.css";
import { useEffect } from "react";
import Link from "next/link";
import LeadForm from "./leadform";
const ServiceDetailsNew = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/service-page/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  // "" | "" | "" | ""
  return (
    <>
      <Script src="/service-page/js/jquery.js" strategy="afterInteractive" />
      <Script src="/service-page/js/jquery.js" strategy="afterInteractive" />
      <Script
        src="/service-page/js/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      />
      <Script src="/service-page/js/aos.js" strategy="afterInteractive" />
      <Script
        src="/service-page/js/owl.carousel.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/service-page/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
      {/* <Script src="/service-page/js/main.js" strategy="afterInteractive" /> */}
      <div className="page_wrapper">
        {/* <div id="preloader">
          <div id="loader"></div>
        </div> */}

        <section className="banner_section">
          <div className="container">
            <div className="row">
              <span className="banner_shape1">
                {" "}
                <Image
                  width={20}
                  height={20}
                  src="/images/services/banner-shape1.png"
                  alt="image"
                />{" "}
              </span>
              <span className="banner_shape2">
                {" "}
                <Image
                  width={20}
                  height={20}
                  src="/images/services/banner-shape2.png"
                  alt="image"
                />{" "}
              </span>
              <span className="banner_shape3">
                {" "}
                <Image
                  width={20}
                  height={20}
                  src="/images/services/banner-shape3.png"
                  alt="image"
                />{" "}
              </span>

              <div
                className="col-lg-8 col-md-12 mx-auto"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="banner_text">
                  <h1>
                    Content That Does the Talking — So You Can Do the Closing.
                  </h1>
                  <p>
                    Sell effortlessly with real estate content marketing — build
                    trust before the buyer arrives, and close deals with
                    warmed-up leads.
                  </p>
                </div>

                <div
                  className="yt_video"
                  data-aos="fade-in"
                  data-aos-duration="1500"
                >
                  <div className="thumbnil">
                    <a
                      className="popup-youtube play-button"
                      data-url="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                      data-toggle="modal"
                      data-target="#myModal"
                      title="XJj2PbenIsU"
                    >
                      <span className="play_btn">
                        <Image
                          width={300}
                          height={300}
                          src="/images/services/play_icon.png"
                          alt="image"
                        />
                        <div className="waves-block">
                          <div className="waves wave-1"></div>
                          <div className="waves wave-2"></div>
                          <div className="waves wave-3"></div>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <div className="banner_images">
              <div className="row d-flex justify-content-center">
                <div className="col-md-2 col-lg-2 col-sm-4 col-xs-4 d-none d-lg-block">
                  <div className="banner_screen screen1">
                    <Image
                      width={300}
                      height={300}
                      className="moving_position_animatin"
                      src="/images/services/hero-image-5.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-md-4 col-lg-2 col-sm-4 col-xs-4">
                  <div className="banner_screen screen2">
                    <Image
                      width={300}
                      height={300}
                      className="moving_animation"
                      src="/images/services/hero-image-4.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-sm-4 col-xs-4">
                  <div className="banner_screen screen3">
                    <Image
                      width={300}
                      height={300}
                      className="moving_position_animatin"
                      src="/images/services/hero-image-1.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-md-4 col-lg-2 col-sm-4 col-xs-4">
                  <div className="banner_screen screen4">
                    <Image
                      width={300}
                      height={300}
                      className="moving_animation"
                      src="/images/services/hero-image-2.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-md-2 col-lg-2 col-sm-4 col-xs-4 d-none d-lg-block">
                  <div className="banner_screen screen5">
                    <Image
                      width={300}
                      height={300}
                      className="moving_position_animatin"
                      src="/images/services/hero-image-3.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="row_am download_section">
          <div className="container">
            <ul className="app_btn" data-aos="fade-in" data-aos-duration="1500">
              <li>
                <a href="#" className="app_store">
                  <Image
                    width={130}
                    height={130}
                    className="blue_img"
                    src="/images/services/appstore_blue.png"
                    alt="image"
                  />
                  <Image
                    width={130}
                    height={130}
                    className="white_img"
                    src="/images/services/appstore_white.png"
                    alt="image"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    width={150}
                    height={150}
                    className="blue_img"
                    src="/images/services/googleplay_blue.png"
                    alt="image"
                  />
                  <Image
                    width={150}
                    height={150}
                    className="white_img"
                    src="/images/services/googleplay_white.png"
                    alt="image"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="row_am statistic_section">
          <div className="container">
            <ul className="app_statstic" id="counter">
              <div
                className="col-md-3 col-lg-3 col-sm-6 col-xs-12"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <li>
                  <div className="icon">
                    <Image
                      width={100}
                      height={100}
                      src="/images/services/download.png"
                      alt="image"
                    />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count="17">
                        0
                      </span>
                      <span>M+</span>
                    </p>
                    <p>Views</p>
                  </div>
                </li>
              </div>

              <div
                className="col-md-3 col-lg-3 col-sm-6 col-xs-12 "
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <li>
                  <div className="icon">
                    <Image
                      width={100}
                      height={100}
                      src="/images/services/followers.png"
                      alt="image"
                    />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count="08">
                        0{" "}
                      </span>
                      <span>M+</span>
                    </p>
                    <p>Gained Followers</p>
                  </div>
                </li>
              </div>

              <div
                className="col-md-3 col-lg-3 col-sm-6 col-xs-12 "
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <li>
                  <div className="icon">
                    <Image
                      width={100}
                      height={100}
                      src="/images/services/reviews.png"
                      alt="image"
                    />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count="2300">
                        1500
                      </span>
                      <span>+</span>
                    </p>
                    <p>Leads</p>
                  </div>
                </li>
              </div>

              <div
                className="col-md-3 col-lg-3 col-sm-6 col-xs-12 "
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <li>
                  <div className="icon">
                    <Image
                      width={100}
                      height={100}
                      src="/images/services/countries.png"
                      alt="image"
                    />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count="150">
                        0
                      </span>
                      <span>+</span>
                    </p>
                    <p>Clients</p>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </section>

        <section className="row_am features_section" id="features">
          <div className="container">
            <div className="features_inner">
              <div
                className="section_title mb-5"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                <h2>
                  Wasting Thousands on Ads & Outreach,
                  <br /> but Still No Quality Leads?
                </h2>
                <p>
                  You’re answering the same questions over and over. Prospects
                  ghost after initial contact. Your team wastes time chasing
                  uninterested people instead of closing real buyers.
                  <br /> And the worst part? Your competitors are building trust
                  before the conversation even starts — with content that
                  educates, nurtures, and positions them as experts.
                </p>
              </div>

              <div className="features_block">
                <div className="row">
                  <div className="col-md-4">
                    <div
                      className="feature_box"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="image">
                        <Image
                          width={300}
                          height={300}
                          src="/images/services/features1.png"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <h4>📉 Cold Leads, Wasted Effort</h4>
                        <p>
                          Your inbox is full of leads that go nowhere. You’re
                          chasing unqualified prospects who aren’t ready to buy
                          — wasting time your team should spend closing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="feature_box"
                      data-aos="fade-up"
                      data-aos-duration="1900"
                    >
                      <div className="image">
                        <Image
                          width={300}
                          height={300}
                          src="/images/services/features3.png"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <h4>⏳ Repeating the Same Sales Pitch</h4>
                        <p>
                          Your agents answer the same questions over and over.
                          Without educational content, every conversation starts
                          from scratch — costing time and energy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="feature_box"
                      data-aos="fade-up"
                      data-aos-duration="1700"
                    >
                      <div className="image">
                        <Image
                          width={300}
                          height={300}
                          src="/images/services/features2.png"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <h4>🔇 Invisible in Search Results</h4>
                        <p>
                          If you’re not ranking for key property or
                          location-based searches, you’re losing deals to
                          competitors who get found first — and appear more
                          credible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="row_am about_app_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about_img"
                  data-aos="fade-in"
                  data-aos-duration="1500"
                >
                  <div className="frame_img">
                    <Image
                      width={300}
                      height={300}
                      className="moving_position_animatin"
                      src="/images/services/about-frame.png"
                      alt="image"
                    />
                  </div>
                  <div className="screen_img">
                    <Image
                      width={300}
                      height={300}
                      className="moving_animation"
                      src="/images/services/about-screen.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about_text">
                  <div
                    className="section_title"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="100"
                  >
                    <h2>Here’s What Happens When You Start Doing It Right</h2>

                    <p>
                      When your real estate content marketing is built for your
                      potential buyers, you build relationship with your leads
                      even before they pick up the phone to call you, or fill
                      that form. and this way you...
                    </p>

                    <ul className="list">
                      <li data-aos="fade-up" data-aos-duration="1500">
                        <i className="icofont-verification-check"></i> Attract a
                        consistent flow of inbound, high-intent buyers
                      </li>
                      <li data-aos="fade-up" data-aos-duration="1500">
                        <i className="icofont-verification-check"></i> Spend
                        less on ads by growing organic traffic over time
                      </li>
                      <li data-aos="fade-up" data-aos-duration="1500">
                        <i className="icofont-verification-check"></i> Rank
                        higher on Google for property and location-based
                        searches
                      </li>
                      <li data-aos="fade-up" data-aos-duration="1500">
                        <i className="icofont-verification-check"></i> Engage
                        prospects who are already informed and ready to take
                        action
                      </li>
                      <li data-aos="fade-up" data-aos-duration="1500">
                        <i className="icofont-verification-check"></i> Save your
                        team time by answering key questions before the call
                      </li>
                    </ul>
                  </div>

                  <a
                    href="#"
                    className="btn puprple_btn"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                  >
                    yes I want that!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="row_am modern_ui_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="ui_text">
                  <div
                    className="section_title"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="100"
                  >
                    <h2>
                      How It Works? A Real Estate Content Engine Built to
                      Perform
                    </h2>
                    <p>
                      We combine SEO, storytelling, and strategic distribution
                      to turn your content into a lead-generation system, your
                      content will handle the heavy work, building relationship
                      with your prospects, ignite interest in them, convert them
                      to a HOT lead, even while you are sleeping.
                    </p>
                  </div>
                  <ul className="design_block">
                    <li data-aos="fade-up" data-aos-duration="1500">
                      <h4>✅ Strategic Content Plan</h4>
                      <p>
                        We start with keyword research and audience insights to
                        map content around what real estate buyers are already
                        searching for — from location guides to investment tips.
                      </p>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1500">
                      <h4>🎯 SEO + Visibility Optimization</h4>
                      <p>
                        Every page, blog, and landing is optimized to rank for
                        location-specific and intent-driven searches like “buy
                        apartment in Dubai Marina” or “villas with ROI.”
                      </p>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1500">
                      <h4>🤝 Trust-Building Formats</h4>
                      <p>
                        We produce the right content formats to match the buyer
                        journey: blog posts, social captions, WhatsApp replies,
                        email nurture sequences, and more — all designed to warm
                        leads before they contact you.
                      </p>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1500">
                      <h4>🔄 Integrated with Your Sales Funnel</h4>
                      <p>
                        We connect your content to landing pages, lead forms,
                        and CRM workflows — so your sales team spends less time
                        explaining and more time closing.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="ui_images"
                  data-aos="fade-in"
                  data-aos-duration="1500"
                >
                  <div className="left_img">
                    <Image
                      width={300}
                      height={300}
                      className="moving_position_animatin"
                      src="/images/services/modern01.png"
                      alt="image"
                    />
                  </div>
                  <div className="right_img">
                    <Image
                      width={300}
                      height={300}
                      className="moving_position_animatin"
                      src="/images/services/secure_data.png"
                      alt="image"
                    />
                    <Image
                      width={300}
                      height={300}
                      className="moving_position_animatin"
                      src="/images/services/modern02.png"
                      alt="image"
                    />
                    <Image
                      width={300}
                      height={300}
                      className="moving_position_animatin"
                      src="/images/services/modern03.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="row_am how_it_works" id="how_it_work">
          <div className="container">
            <div className="how_it_inner">
              <div
                className="section_title"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                <h2>
                  🎯 How We Turn Views Into Buyers – In 3 Conversion-Driven
                  Steps
                </h2>
                <p>
                  Here&apos;s what happens when you use Real Estate conent
                  marketing this is how we turn content into qualified real
                  estate leads that actually convert:
                </p>
              </div>
              <div className="step_block">
                <ul>
                  <li>
                    <div
                      className="step_text"
                      data-aos="fade-right"
                      data-aos-duration="1500"
                    >
                      <h4>Attract the Right Audience</h4>
                      <div className="app_icon">
                        <a href="#">
                          <i className="icofont-brand-android-robot"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-brand-apple"></i>
                        </a>
                        <a href="#">
                          <i className="icofont-brand-windows"></i>
                        </a>
                      </div>
                      <p>
                        We create SEO-optimized, high-value content based on
                        what real estate buyers are searching for and have
                        interest in — so the right people land on your website
                        and social media channels from the start. (yes you read
                        it right, social media in 2025 is all about keywords and
                        intent too)
                      </p>
                    </div>
                    <div className="step_number">
                      <h3>01</h3>
                    </div>
                    <div
                      className="step_img"
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      <Image
                        width={300}
                        height={300}
                        src="/images/services/download_app.jpg"
                        alt="image"
                      />
                    </div>
                  </li>

                  <li>
                    <div
                      className="step_text"
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      <h4>Build Trust Before the Inquiry</h4>
                      {/* <span>14 days free trial</span> */}
                      <p>
                        Each blog, Reel, video, guide, and landing page is
                        designed to answer buyer questions, agitate their pain,
                        capture their interest, highlight your expertise, and
                        warm up leads before they ever fill out a form or pick
                        up the phone to call you.
                      </p>
                    </div>
                    <div className="step_number">
                      <h3>02</h3>
                    </div>
                    <div
                      className="step_img"
                      data-aos="fade-right"
                      data-aos-duration="1500"
                    >
                      <Image
                        width={300}
                        height={300}
                        src="/images/services/create_account.jpg"
                        alt="image"
                      />
                    </div>
                  </li>

                  <li>
                    <div
                      className="step_text"
                      data-aos="fade-right"
                      data-aos-duration="1500"
                    >
                      <h4>Convert with Purpose-Built CTAs</h4>
                      {/* <span>
                        Have any questions check our <a href="#">FAQs</a>
                      </span> */}
                      <p>
                        We lead viewers toward action, covertly and overtly —
                        with custom CTAs, Lead magnets, WhatsApp integration,
                        and CRM-ready lead forms that make it easy to engage,
                        book, or request more info.
                      </p>
                    </div>
                    <div className="step_number">
                      <h3>03</h3>
                    </div>
                    <div
                      className="step_img"
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      <Image
                        width={300}
                        height={300}
                        src="/images/services/enjoy_app.jpg"
                        alt="image"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="row_am testimonial_section">
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <h2>What Real Estate Pros Say About Us</h2>
              <p>
                Buyers aren’t the only ones we help. Agents, developers, and
                marketing teams trust us to turn content into qualified leads —
                month after month.
              </p>
            </div>
            <div
              className="testimonial_block"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div id="testimonial_slider" className="owl-carousel owl-theme">
                <div className="item">
                  <div className="testimonial_slide_box">
                    <div className="rating">
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                    </div>
                    <p className="review">
                      “We were tired of cold leads that ghosted. Once we
                      launched content marketing with this team, inquiries got
                      more qualified — and conversions went up.” — Shayna John,
                      Marketing Lead, Careative Inc
                    </p>
                    <div className="testimonial_img">
                      <Image
                        width={100}
                        height={100}
                        src="/images/services/testimonial_user1.png"
                        alt="image"
                      />
                    </div>
                    <h3>Durmuş Özge</h3>
                    <span className="designation">Founder & Owner</span>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_slide_box">
                    <div className="rating">
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                    </div>
                    <p className="review">
                      “We were tired of cold leads that ghosted. Once we
                      launched content marketing with this team, inquiries got
                      more qualified — and conversions went up.” — Shayna John,
                      Marketing Lead, Careative Inc
                    </p>
                    <div className="testimonial_img">
                      <Image
                        width={100}
                        height={100}
                        src="/images/services/testimonial_user1.png"
                        alt="image"
                      />
                    </div>
                    <h3>Durmuş Özge</h3>
                    <span className="designation">Founder & Owner</span>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial_slide_box">
                    <div className="rating">
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                      <span>
                        <i className="icofont-star-new"></i>
                      </span>
                    </div>
                    <p className="review">
                      “We were tired of cold leads that ghosted. Once we
                      launched content marketing with this team, inquiries got
                      more qualified — and conversions went up.” — Shayna John,
                      Marketing Lead, Careative Inc
                    </p>
                    <div className="testimonial_img">
                      <Image
                        width={100}
                        height={100}
                        src="/images/services/testimonial_user1.png"
                        alt="image"
                      />
                    </div>
                    <h3>Durmuş Özge</h3>
                    <span className="designation">Founder & Owner</span>
                  </div>
                </div>
              </div>

              <div className="total_review">
                <div className="rating">
                  <span>
                    <i className="icofont-star-new"></i>
                  </span>
                  <span>
                    <i className="icofont-star-new"></i>
                  </span>
                  <span>
                    <i className="icofont-star-new"></i>
                  </span>
                  <span>
                    <i className="icofont-star-new"></i>
                  </span>
                  <span>
                    <i className="icofont-star-new"></i>
                  </span>
                  <p>4.8/5.0</p>
                </div>
                <h3>86</h3>
                <a href="#">
                  see our testimonial and case studies{" "}
                  <i className="icofont-arrow-right-new"></i>
                </a>
              </div>

              <div className="avtar_faces">
                <Image
                  width={5000}
                  height={5000}
                  src="/images/services/avtar_testimonial.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="row_am trusted_section">
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <h2>
                Trusted by <span>150+</span> Real Estate Brands, Developers &
                Agents
              </h2>
              <p>
                From boutique agencies to international property groups — real
                estate professionals trust us to turn content into closings, and
                browsers into buyers.
              </p>
            </div>

            <div
              className="company_logos"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <div id="company_slider" className="owl-carousel owl-theme">
                <div className="item">
                  <div className="logo">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/paypal.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/spoty.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/shopboat.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/slack.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/envato.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/paypal.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/spoty.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/shopboat.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="row_am pricing_section" id="pricing">
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <h2>
                Best & simple <span>pricing</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typese
                tting <br /> indus orem Ipsum has beenthe standard dummy.
              </p>
            </div>
            <div
              className="toggle_block"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <span className="month active">Monthly</span>
              <div className="tog_block">
                <span className="tog_btn"></span>
              </div>
              <span className="years">Yearly</span>
              <span className="offer">50% off</span>
            </div>

            <div
              className="pricing_pannel monthly_plan active"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="row">
                <div className="col-md-4">
                  <div className="pricing_block">
                    <div className="icon">
                      <Image
                        width={300}
                        height={300}
                        src="/images/services/standard.png"
                        alt="image"
                      />
                    </div>
                    <div className="pkg_name">
                      <h3>Standard</h3>
                      <span>For the basics</span>
                    </div>
                    <span className="price">$15</span>
                    <ul className="benifits">
                      <li>
                        <p>Up to 5 Website</p>
                      </li>
                      <li>
                        <p>50 GB disk space</p>
                      </li>
                      <li>
                        <p>10 Customize sub pages</p>
                      </li>
                      <li>
                        <p>2 Domains access</p>
                      </li>
                      <li>
                        <p>Support on request</p>
                      </li>
                    </ul>
                    <a href="#" className="btn white_btn">
                      BUY NOW
                    </a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pricing_block highlited_block">
                    <div className="icon">
                      <Image
                        width={300}
                        height={300}
                        src="/images/services/unlimited.png"
                        alt="image"
                      />
                    </div>
                    <div className="pkg_name">
                      <h3>Unlimited</h3>
                      <span>For the professionals</span>
                    </div>
                    <span className="price">$99</span>
                    <ul className="benifits">
                      <li>
                        <p>Unlimited Website</p>
                      </li>
                      <li>
                        <p>200 GB disk space</p>
                      </li>
                      <li>
                        <p>20 Customize sub pages</p>
                      </li>
                      <li>
                        <p>10 Domains access</p>
                      </li>
                      <li>
                        <p>24/7 Customer support</p>
                      </li>
                    </ul>
                    <a href="#" className="btn white_btn">
                      BUY NOW
                    </a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pricing_block">
                    <div className="icon">
                      <Image
                        width={300}
                        height={300}
                        src="/images/services/premium.png"
                        alt="image"
                      />
                    </div>
                    <div className="pkg_name">
                      <h3>Premium</h3>
                      <span>For small team</span>
                    </div>
                    <span className="price">$55</span>
                    <ul className="benifits">
                      <li>
                        <p>Up to 10 Website</p>
                      </li>
                      <li>
                        <p>100 GB disk space</p>
                      </li>
                      <li>
                        <p>15 Customize sub pages</p>
                      </li>
                      <li>
                        <p>4 Domains access</p>
                      </li>
                      <li>
                        <p>24/7 Customer support</p>
                      </li>
                    </ul>
                    <a href="#" className="btn white_btn">
                      BUY NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing_pannel yearly_plan">
              <div className="row">
                <div className="col-md-4">
                  <div className="pricing_block">
                    <div className="icon">
                      <Image
                        width={300}
                        height={300}
                        src="/images/services/standard.png"
                        alt="image"
                      />
                    </div>
                    <div className="pkg_name">
                      <h3>Standard</h3>
                      <span>For the basics</span>
                    </div>
                    <span className="price">$150</span>
                    <ul className="benifits">
                      <li>
                        <p>Up to 10 Website</p>
                      </li>
                      <li>
                        <p>100 GB disk space</p>
                      </li>
                      <li>
                        <p>25 Customize sub pages</p>
                      </li>
                      <li>
                        <p>4 Domains access</p>
                      </li>
                      <li>
                        <p>Support on request</p>
                      </li>
                    </ul>
                    <a href="#" className="btn white_btn">
                      BUY NOW
                    </a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pricing_block highlited_block">
                    <div className="icon">
                      <Image
                        width={300}
                        height={300}
                        src="/images/services/unlimited.png"
                        alt="image"
                      />
                    </div>
                    <div className="pkg_name">
                      <h3>Unlimited</h3>
                      <span>For the professionals</span>
                    </div>
                    <span className="price">$999</span>
                    <ul className="benifits">
                      <li>
                        <p>Unlimited Website</p>
                      </li>
                      <li>
                        <p>400 GB disk space</p>
                      </li>
                      <li>
                        <p>40 Customize sub pages</p>
                      </li>
                      <li>
                        <p>20 Domains access</p>
                      </li>
                      <li>
                        <p>24/7 Customer support</p>
                      </li>
                    </ul>
                    <a href="#" className="btn white_btn">
                      BUY NOW
                    </a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pricing_block">
                    <div className="icon">
                      <Image
                        width={300}
                        height={300}
                        src="/images/services/premium.png"
                        alt="image"
                      />
                    </div>
                    <div className="pkg_name">
                      <h3>Premium</h3>
                      <span>For small team</span>
                    </div>
                    <span className="price">$550</span>
                    <ul className="benifits">
                      <li>
                        <p>Up to 20 Website</p>
                      </li>
                      <li>
                        <p>200 GB disk space</p>
                      </li>
                      <li>
                        <p>25 Customize sub pages</p>
                      </li>
                      <li>
                        <p>8 Domains access</p>
                      </li>
                      <li>
                        <p>24/7 Customer support</p>
                      </li>
                    </ul>
                    <a href="#" className="btn white_btn">
                      BUY NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p
              className="contact_text"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Not sure what to choose ? <a href="#">contact us</a> for custom
              packages
            </p>
          </div>
        </section> */}

        <section className="row_am faq_section">
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <h2>
                <span>FAQ</span> - Frequently Asked Questions
              </h2>
              <p>
                here are answer to our most ferquent questions that we have been
                asked by our clients before working with us.
              </p>
            </div>
            <div className="faq_panel">
              <div className="accordion" id="accordionExample">
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link active"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                      >
                        <i className="icon_faq icofont-plus"></i> How long does
                        it take to start seeing results?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        You’ll start seeing traffic and engagement within the
                        first 30–45 days. Qualified lead flow usually
                        strengthens by Month 2–3, especially when SEO and
                        content are layered with paid campaigns.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                      >
                        <i className="icon_faq icofont-plus"></i> Do you write
                        all the content for us?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Yes. Our team handles content strategy, writing,
                        editing, SEO optimization, and publishing. We
                        collaborate with you for brand voice and accuracy,
                        especially for location-specific content.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                      >
                        <i className="icon_faq icofont-plus"></i> Will this work
                        for off-plan or secondary property sales?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Absolutely. We customize content and funnel strategy
                        based on your inventory — off-plan, secondary, rentals,
                        or investor-focused. The messaging is tailored to fit.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                      >
                        <i className="icon_faq icofont-plus"></i>Can I choose
                        the topics or keywords?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Yes. We provide a full keyword and content plan based on
                        your business goals, and you’ll have approval over all
                        topics before production begins.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                      >
                        <i className="icon_faq icofont-plus"></i>What’s included
                        in the monthly service?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Each plan includes SEO blog content, social Media
                        content calendar, website optimization, performance
                        tracking, and optional paid campaign management. Premium
                        tiers include video shooting, scripting, editing, funnel
                        setup, and A/B testing.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                      >
                        <i className="icon_faq icofont-plus"></i>How does this
                        integrate with our current website or CRM?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        We can publish directly on your website as long as it
                        meets the basic criteria for SEO optimization and
                        connect lead forms to your CRM or WhatsApp. No need to
                        change platforms — we work around your tools if they are
                        up to date and helps you in long run.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                      >
                        <i className="icon_faq icofont-plus"></i>Is there a
                        long-term contract?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        We work on a monthly retainer basis with a recommended 3
                        to 8-month commitment to see full value. You can cancel
                        or scale up anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="row_am interface_section">
          <div className="container-fluid">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <h2>Seamless Content Workflow, Built for Real Estate Teams</h2>
              <p>
                From strategy to execution, everything is structured — so you
                always know what’s being published, when, and why it matters.
              </p>
            </div>

            <div className="screen_slider">
              <div id="screen_slider" className="owl-carousel owl-theme">
                <div className="item">
                  <div className="screen_frame_img">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/screen-1.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="screen_frame_img">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/screen-2.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="screen_frame_img">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/screen-3.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="screen_frame_img">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/screen-4.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="screen_frame_img">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/screen-5.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="screen_frame_img">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/screen-3.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="row_am free_app_section" id="getstarted">
          <div className="container">
            <div
              className="free_app_inner"
              data-aos="fade-in"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <div className="row">
                <div className="col-md-8">
                  <div className="free_text">
                    <div className="section_title">
                      <h2>
                        🔥 Ready to Attract Leads Who Are Already Sold on You?
                      </h2>
                      <span className="text-white">What You Get:</span>
                      <ul className="text-white list-group-cta">
                        <li>
                          Content that ranks and get views on Google and social
                          media and resonates with real buyers
                        </li>
                        <li>
                          A steady stream of inbound leads who already know,
                          like, and trust you
                        </li>
                        <li>
                          Less time selling and convincing — more time closing
                        </li>
                        <li>
                          A brand that feels familiar before you ever follow up
                        </li>
                      </ul>
                    </div>
                    <ul className="app_btn ml-0">
                      <li>
                        <Link href="#">I want it !</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4">
                  {/* <div className="free_img">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/download-screen01.png"
                      alt="image"
                    />
                    <Image
                      width={300}
                      height={300}
                      className="mobile_mockup"
                      src="/images/services/download-screen02.png"
                      alt="image"
                    />
                  </div> */}
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="row_am latest_story" id="blog">
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-in"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <h2>Wanna handle it yourself for free? we got your back</h2>
              <p>
                We believe in giving in order to receive, in our blog we break
                down each and every step of a successful real estate content
                marketing strategy so you can start doing it yourself today!
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div
                  className="story_box"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="story_img">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/story01.png"
                      alt="image"
                    />
                    <span>45 min ago</span>
                  </div>
                  <div className="story_text">
                    <h3>Cool features added!</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry lorem Ipsum has.
                    </p>
                    <a href="#">READ MORE</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="story_box"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="story_img">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/story02.png"
                      alt="image"
                    />
                    <span>45 min ago</span>
                  </div>
                  <div className="story_text">
                    <h3>Top rated app! Yupp.</h3>
                    <p>
                      Simply dummy text of the printing and typesetting industry
                      lorem Ipsum has Lorem Ipsum is.
                    </p>
                    <a href="#">READ MORE</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="story_box"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="story_img">
                    <Image
                      width={300}
                      height={300}
                      src="/images/services/story03.png"
                      alt="image"
                    />
                    <span>45 min ago</span>
                  </div>
                  <div className="story_text">
                    <h3>Creative ideas on app.</h3>
                    <p>
                      Printing and typesetting industry lorem Ipsum has Lorem
                      simply dummy text of the.
                    </p>
                    <a href="#">READ MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="modal fade youtube-video"
          id="myModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                id="close-video"
                type="button"
                className="button btn btn-default text-right"
                data-dismiss="modal"
              >
                <i className="icofont-close-line-circled"></i>
              </button>
              <div className="modal-body">
                <div id="video-container" className="video-container">
                  <iframe
                    id="youtubevideo"
                    src=""
                    width="640"
                    height="360"
                  ></iframe>
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>

        <div className="purple_backdrop"></div>
      </div>
    </>
  );
};
export default ServiceDetailsNew;
