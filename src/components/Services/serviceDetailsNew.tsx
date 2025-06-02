"use client";
import Image from "next/image";
import Script from "next/script";

import "@/../styles/css/style.css"
import "@/../styles/css/icofont.min.css"
import "@/../styles/css/magnific-popup.min.css"
import "@/../styles/css/owl.carousel.min.css"
import "@/../styles/css/responsive.css"
import "@/../styles/css/responsive - Copy.css"
import { useEffect } from "react";
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
  return (
    <>
      <Script src="/service-page/js/jquery.js" strategy="afterInteractive" />
      <Script src="/service-page/js/jquery.js" strategy="afterInteractive" />
      <Script src="/service-page/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
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
                <Image width={20} height={20} src="/images/services/banner-shape1.png" alt="image" />{" "}
              </span>
              <span className="banner_shape2">
                {" "}
                <Image width={20} height={20} src="/images/services/banner-shape2.png" alt="image" />{" "}
              </span>
              <span className="banner_shape3">
                {" "}
                <Image width={20} height={20} src="/images/services/banner-shape3.png" alt="image" />{" "}
              </span>

              <div
                className="col-lg-8 col-md-12 mx-auto"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="banner_text">
                  <h1>Best way to manage your customers easily.</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and setting
                    indus orem Ipsum has been the industrys standard dummy text
                    ever.
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
                        <Image width={300} height={300} src="/images/services/play_icon.png" alt="image" />
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
                    <Image width={300} height={300}
                      className="moving_position_animatin"
                      src="/images/services/hero-image-5.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-md-4 col-lg-2 col-sm-4 col-xs-4">
                  <div className="banner_screen screen2">
                    <Image width={300} height={300}
                      className="moving_animation"
                      src="/images/services/hero-image-4.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-sm-4 col-xs-4">
                  <div className="banner_screen screen3">
                    <Image width={300} height={300}
                      className="moving_position_animatin"
                      src="/images/services/hero-image-1.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-md-4 col-lg-2 col-sm-4 col-xs-4">
                  <div className="banner_screen screen4">
                    <Image width={300} height={300}
                      className="moving_animation"
                      src="/images/services/hero-image-2.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-md-2 col-lg-2 col-sm-4 col-xs-4 d-none d-lg-block">
                  <div className="banner_screen screen5">
                    <Image width={300} height={300}
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
                  <Image width={130} height={130}
                    className="blue_img"
                    src="/images/services/appstore_blue.png"
                    alt="image"
                  />
                  <Image width={130} height={130}
                    className="white_img"
                    src="/images/services/appstore_white.png"
                    alt="image"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image width={150} height={150}
                    className="blue_img"
                    src="/images/services/googleplay_blue.png"
                    alt="image"
                  />
                  <Image width={150} height={150}
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
                    <Image width={100} height={100} src="/images/services/download.png" alt="image" />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count="17">
                        0
                      </span>
                      <span>M+</span>
                    </p>
                    <p>Download</p>
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
                    <Image width={100} height={100} src="/images/services/followers.png" alt="image" />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count="08">
                        0{" "}
                      </span>
                      <span>M+</span>
                    </p>
                    <p>Followers</p>
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
                    <Image width={100} height={100} src="/images/services/reviews.png" alt="image" />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count="2300">
                        1500
                      </span>
                      <span>+</span>
                    </p>
                    <p>Reviews</p>
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
                    <Image width={100} height={100} src="/images/services/countries.png" alt="image" />
                  </div>
                  <div className="text">
                    <p>
                      <span className="counter-value" data-count="150">
                        0
                      </span>
                      <span>+</span>
                    </p>
                    <p>Countries</p>
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
                className="section_title"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                <h2>
                  <span>Features</span> that makes app different!
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typese
                  tting <br /> indus orem Ipsum has beenthe standard dummy.
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
                        <Image width={300} height={300} src="/images/services/features1.png" alt="image" />
                      </div>
                      <div className="text">
                        <h4>Secure data</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typese tting <br /> indus orem Ipsum has beenthe
                          standard dummy.
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
                        <Image width={300} height={300} src="/images/services/features2.png" alt="image" />
                      </div>
                      <div className="text">
                        <h4>Automate everything</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typese tting <br /> indus orem Ipsum has beenthe
                          standard dummy.
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
                        <Image width={300} height={300} src="/images/services/features3.png" alt="image" />
                      </div>
                      <div className="text">
                        <h4>Secure data</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typese tting <br /> indus orem Ipsum has beenthe
                          standard dummy.
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
                    <Image width={300} height={300}
                      className="moving_position_animatin"
                      src="/images/services/about-frame.png"
                      alt="image"
                    />
                  </div>
                  <div className="screen_img">
                    <Image width={300} height={300}
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
                    <h2>
                      Some awesome words <span>about app.</span>
                    </h2>

                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took a galley of type and. Lorem ipsum dolor sit amet.
                    </p>

                    <ul className="list">
                      <li data-aos="fade-up" data-aos-duration="1500">
                        <i className="icofont-verification-check"></i> Simply
                        dummy text of the printing and
                      </li>
                      <li data-aos="fade-up" data-aos-duration="1500">
                        <i className="icofont-verification-check"></i>{" "}
                        Typesetting industry lorem Ipsum has been the
                      </li>
                      <li data-aos="fade-up" data-aos-duration="1500">
                        <i className="icofont-verification-check"></i> Industrys
                        standard dummy text
                      </li>
                      <li data-aos="fade-up" data-aos-duration="1500">
                        <i className="icofont-verification-check"></i> Simply
                        dummy text of the printing and
                      </li>
                      <li data-aos="fade-up" data-aos-duration="1500">
                        <i className="icofont-verification-check"></i>{" "}
                        Typesetting industry lorem Ipsum has been the
                      </li>
                    </ul>
                  </div>

                  <a
                    href="#"
                    className="btn puprple_btn"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                  >
                    START FREE TRIAL
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
                      Beautiful design with <span>modern UI</span>
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took a galley of type and.
                    </p>
                  </div>
                  <ul className="design_block">
                    <li data-aos="fade-up" data-aos-duration="1500">
                      <h4>Carefully designed</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        type esetting industry lorem Ipsum has.
                      </p>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1500">
                      <h4>Seamless Sync</h4>
                      <p>
                        Simply dummy text of the printing and typesetting
                        inustry lorem Ipsum has Lorem dollar summit.
                      </p>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1500">
                      <h4>Access Drive</h4>
                      <p>
                        Printing and typesetting industry lorem Ipsum has been
                        the industrys standard dummy text of type setting.
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
                    <Image width={300} height={300}
                      className="moving_position_animatin"
                      src="/images/services/modern01.png"
                      alt="image"
                    />
                  </div>
                  <div className="right_img">
                    <Image width={300} height={300}
                      className="moving_position_animatin"
                      src="/images/services/secure_data.png"
                      alt="image"
                    />
                    <Image width={300} height={300}
                      className="moving_position_animatin"
                      src="/images/services/modern02.png"
                      alt="image"
                    />
                    <Image width={300} height={300}
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
                  <span>How it works</span> - 3 easy steps
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typese
                  tting <br /> indus orem Ipsum has beenthe standard dummy.
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
                      <h4>Download app</h4>
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
                      <p>Download App either for Windows, Mac or Android</p>
                    </div>
                    <div className="step_number">
                      <h3>01</h3>
                    </div>
                    <div
                      className="step_img"
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      <Image width={300} height={300} src="/images/services/download_app.jpg" alt="image" />
                    </div>
                  </li>

                  <li>
                    <div
                      className="step_text"
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      <h4>Create account</h4>
                      <span>14 days free trial</span>
                      <p>
                        Sign up free for App account. One account for all
                        devices.
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
                      <Image width={300} height={300} src="/images/services/create_account.jpg" alt="image" />
                    </div>
                  </li>

                  <li>
                    <div
                      className="step_text"
                      data-aos="fade-right"
                      data-aos-duration="1500"
                    >
                      <h4>It’s done, enjoy the app</h4>
                      <span>
                        Have any questions check our <a href="#">FAQs</a>
                      </span>
                      <p>
                        Get most amazing app experience,Explore and share the
                        app
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
                      <Image width={300} height={300} src="/images/services/enjoy_app.jpg" alt="image" />
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
              <h2>
                What our <span>customer say</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typese
                tting <br /> indus orem Ipsum has beenthe standard dummy.
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
                      “ Lorem Ipsum is simply dummy text of the printing and
                      typese tting us orem Ipsum has been lorem beenthe standar
                      dummy. ”
                    </p>
                    <div className="testimonial_img">
                      <Image width={100} height={100} src="/images/services/testimonial_user1.png" alt="image" />
                    </div>
                    <h3>Shayna John</h3>
                    <span className="designation">Careative inc</span>
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
                      “ Lorem Ipsum is simply dummy text of the printing and
                      typese tting us orem Ipsum has been lorem beenthe standar
                      dummy. ”
                    </p>
                    <div className="testimonial_img">
                      <Image width={500} height={500} src="/images/services/testimonial_user2.png" alt="image" />
                    </div>
                    <h3>Willium Den</h3>
                    <span className="designation">Careative inc</span>
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
                      “ Lorem Ipsum is simply dummy text of the printing and
                      typese tting us orem Ipsum has been lorem beenthe standar
                      dummy. ”
                    </p>
                    <div className="testimonial_img">
                      <Image width={500} height={500} src="/images/services/testimonial_user3.png" alt="image" />
                    </div>
                    <h3>Cyrus Stephen</h3>
                    <span className="designation">Careative inc</span>
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
                  <p>5.0 / 5.0</p>
                </div>
                <h3>2578</h3>
                <a href="#">
                  TOTAL USER REVIEWS <i className="icofont-arrow-right-new"></i>
                </a>
              </div>

              <div className="avtar_faces">
                <Image width={5000} height={5000} src="/images/services/avtar_testimonial.png" alt="image" />
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
                Trusted by <span>150+</span> companies
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typese
                tting <br /> indus orem Ipsum has beenthe standard dummy.
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
                    <Image width={300} height={300} src="/images/services/paypal.png" alt="image" />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image width={300} height={300} src="/images/services/spoty.png" alt="image" />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image width={300} height={300} src="/images/services/shopboat.png" alt="image" />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image width={300} height={300} src="/images/services/slack.png" alt="image" />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image width={300} height={300} src="/images/services/envato.png" alt="image" />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image width={300} height={300} src="/images/services/paypal.png" alt="image" />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image width={300} height={300} src="/images/services/spoty.png" alt="image" />
                  </div>
                </div>
                <div className="item">
                  <div className="logo">
                    <Image width={300} height={300} src="/images/services/shopboat.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="row_am pricing_section" id="pricing">
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
                      <Image width={300} height={300} src="/images/services/standard.png" alt="image" />
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
                      <Image width={300} height={300} src="/images/services/unlimited.png" alt="image" />
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
                      <Image width={300} height={300} src="/images/services/premium.png" alt="image" />
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
                      <Image width={300} height={300} src="/images/services/standard.png" alt="image" />
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
                      <Image width={300} height={300} src="/images/services/unlimited.png" alt="image" />
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
                      <Image width={300} height={300} src="/images/services/premium.png" alt="image" />
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
        </section>

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
                Lorem Ipsum is simply dummy text of the printing and typese
                tting <br /> indus orem Ipsum has beenthe standard dummy.
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
                        <i className="icon_faq icofont-plus"></i> How can i pay
                        ?
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry lorem Ipsum has. been the industrys
                        standard dummy text ever since the when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five cen
                        turies but also the leap into electronic typesetting,
                        remaining essentially unchanged.
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
                        <i className="icon_faq icofont-plus"></i> How to setup
                        account ?
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry lorem Ipsum has. been the industrys
                        standard dummy text ever since the when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five cen
                        turies but also the leap into electronic typesetting,
                        remaining essentially unchanged.
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
                        <i className="icon_faq icofont-plus"></i>What is process
                        to get refund ?
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry lorem Ipsum has. been the industrys
                        standard dummy text ever since the when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five cen
                        turies but also the leap into electronic typesetting,
                        remaining essentially unchanged.
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
                        <i className="icon_faq icofont-plus"></i>What is process
                        to get refund ?
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry lorem Ipsum has. been the industrys
                        standard dummy text ever since the when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five cen
                        turies but also the leap into electronic typesetting,
                        remaining essentially unchanged.
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
              <h2>
                Beautifull <span>interface</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typese
                tting <br /> indus orem Ipsum has beenthe standard dummy.
              </p>
            </div>

            <div className="screen_slider">
              <div id="screen_slider" className="owl-carousel owl-theme">
                <div className="item">
                  <div className="screen_frame_img">
                    <Image width={300} height={300} src="/images/services/screen-1.png" alt="image" />
                  </div>
                </div>
                <div className="item">
                  <div className="screen_frame_img">
                    <Image width={300} height={300} src="/images/services/screen-2.png" alt="image" />
                  </div>
                </div>
                <div className="item">
                  <div className="screen_frame_img">
                    <Image width={300} height={300} src="/images/services/screen-3.png" alt="image" />
                  </div>
                </div>
                <div className="item">
                  <div className="screen_frame_img">
                    <Image width={300} height={300} src="/images/services/screen-4.png" alt="image" />
                  </div>
                </div>
                <div className="item">
                  <div className="screen_frame_img">
                    <Image width={300} height={300} src="/images/services/screen-5.png" alt="image" />
                  </div>
                </div>
                <div className="item">
                  <div className="screen_frame_img">
                    <Image width={300} height={300} src="/images/services/screen-3.png" alt="image" />
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
                <div className="col-md-6">
                  <div className="free_text">
                    <div className="section_title">
                      <h2>Let’s download free from apple and play store</h2>
                      <p>
                        Instant free download from apple and play store orem
                        Ipsum is simply dummy text of the printing. and typese
                        tting indus orem Ipsum has beenthe standard
                      </p>
                    </div>
                    <ul className="app_btn">
                      <li>
                        <a href="#">
                          <Image width={300} height={300} src="/images/services/appstore_blue.png" alt="image" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image width={300} height={300} src="/images/services/googleplay_blue.png" alt="image" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="free_img">
                    <Image width={300} height={300} src="/images/services/download-screen01.png" alt="image" />
                    <Image width={300} height={300}
                      className="mobile_mockup"
                      src="/images/services/download-screen02.png"
                      alt="image"
                    />
                  </div>
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
              <h2>
                Read latest <span>story</span>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typese
                tting <br /> indus orem Ipsum has beenthe standard dummy.
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
                    <Image width={300} height={300} src="/images/services/story01.png" alt="image" />
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
                    <Image width={300} height={300} src="/images/services/story02.png" alt="image" />
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
                    <Image width={300} height={300} src="/images/services/story03.png" alt="image" />
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
