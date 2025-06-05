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
import { serviceDetailsContent } from "../../../constants/services/serviceDetailsContent";
import NotFound from "@/app/not-found";
const ServiceDetailsNew = ({ service }: { service: string }) => {
  console.log(service);

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
  const serviceDetails = serviceDetailsContent.find(
    (serviceDetails) => serviceDetails.keyService === service
  );
  if (!serviceDetails) return <NotFound />;
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
                  <h1>{serviceDetails?.bannerSection.title}</h1>
                  <p>{serviceDetails?.bannerSection.description}</p>
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
                {serviceDetails.bannerImages?.map((banner, index) => {
                  return (
                    <div
                      key={index}
                      className="col-md-2 col-lg-2 col-sm-4 col-xs-4 d-none d-lg-block"
                    >
                      <div className="banner_screen screen1">
                        <Image
                          width={300}
                          height={300}
                          className="moving_position_animatin"
                          src={banner}
                          alt="image"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="row_am download_section">
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
        </section> */}

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
                    <p>{serviceDetails.statisticSection.first.title}</p>
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
                    <p>{serviceDetails.statisticSection.second.title}</p>
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
                    <p>{serviceDetails.statisticSection.third.title}</p>
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
                    <p>{serviceDetails.statisticSection.fourth.title}</p>
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
                <h2
                  dangerouslySetInnerHTML={{
                    __html: serviceDetails?.featuresSection.title ?? "",
                  }}
                ></h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: serviceDetails?.featuresSection.description ?? "",
                  }}
                ></p>
              </div>

              <div className="features_block">
                <div className="row">
                  {serviceDetails?.featuresSection.featureList.map(
                    (feature, index) => {
                      return (
                        <div key={index} className="col-md-4">
                          <div
                            className="feature_box"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                          >
                            <div className="image d-flex justify-content-center">
                              <Image
                                width={300}
                                height={300}
                                src={feature.image}
                                alt="image"
                              />
                            </div>
                            <div className="text">
                              <h4>{feature.title}</h4>
                              <p>{feature.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
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
                      src={serviceDetails.aboutAppsection.images[0]}
                      alt="image"
                    />
                  </div>
                  <div className="screen_img">
                    <Image
                      width={300}
                      height={300}
                      className="moving_animation"
                      src={serviceDetails.aboutAppsection.images[1]}
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
                    <h2>{serviceDetails?.aboutAppsection.title}</h2>

                    <p>{serviceDetails?.aboutAppsection.description}</p>

                    <ul className="list">
                      {serviceDetails?.aboutAppsection.aboutAppList.map(
                        (about, index) => {
                          return (
                            <li
                              key={index}
                              data-aos="fade-up"
                              data-aos-duration="1500"
                            >
                              <i className="icofont-verification-check"></i>{" "}
                              {about}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="btn puprple_btn"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                  >
                    {serviceDetails?.aboutAppsection.link}
                  </Link>
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
                    <h2>{serviceDetails?.modernUiSection.title}</h2>
                    <p>{serviceDetails?.modernUiSection.description}</p>
                  </div>
                  <ul className="design_block">
                    {serviceDetails?.modernUiSection.modernUiList.map(
                      (modern, index) => {
                        return (
                          <li
                            key={index}
                            data-aos="fade-up"
                            data-aos-duration="1500"
                          >
                            <h4>{modern.title}</h4>
                            <p>{modern.description}</p>
                          </li>
                        );
                      }
                    )}
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
                      width={180}
                      height={300}
                      className="moving_position_animatin"
                      src={serviceDetails.modernUiSection.images[0]}
                      // src="/images/services/modern01.png"
                      alt="image"
                    />
                  </div>
                  <div className="right_img">
                    <Image
                      width={300}
                      height={300}
                      className="moving_position_animatin"
                      src={serviceDetails.modernUiSection.images[1]}
                      alt="image"
                    />
                    <Image
                      width={300}
                      height={300}
                      className="moving_position_animatin"
                      src={serviceDetails.modernUiSection.images[2]}
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
                <h2>{serviceDetails?.howItWorks.title}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: serviceDetails?.howItWorks.description ?? "",
                  }}
                ></p>
              </div>
              <div className="step_block">
                <ul>
                  {serviceDetails?.howItWorks.howItWorksList.map(
                    (howIt, index) => {
                      return (
                        <li key={index}>
                          <div
                            className="step_text"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                          >
                            <h4>{howIt.title}</h4>
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
                            <p>{howIt.description}</p>
                          </div>
                          <div className="step_number">
                            <h3>0{index + 1}</h3>
                          </div>
                          <div
                            className="step_img"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                          >
                            <Image
                              width={300}
                              height={300}
                              src={howIt.img}
                              alt="image"
                            />
                          </div>
                        </li>
                      );
                    }
                  )}
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
              <h2>{serviceDetails?.testimonialSection.title}</h2>
              <p>{serviceDetails?.testimonialSection.description}</p>
            </div>
            <div
              className="testimonial_block"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <div id="testimonial_slider" className="owl-carousel owl-theme">
                {serviceDetails?.testimonialSection.commentList.map(
                  (comment, index) => {
                    return (
                      <div key={index} className="item">
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
                          <p className="review">{comment.description}</p>
                          <div className="testimonial_img">
                            <Image
                              width={100}
                              height={100}
                              src={comment.img}
                              alt={`${comment.name} image`}
                            />
                          </div>
                          <h3>{comment.name}</h3>
                          <span className="designation">
                            {comment.position}
                          </span>
                        </div>
                      </div>
                    );
                  }
                )}
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
              <h2
                dangerouslySetInnerHTML={{
                  __html: serviceDetails?.trustedSection.title ?? "",
                }}
              ></h2>
              <p>{serviceDetails?.trustedSection.description}</p>
            </div>

            <div
              className="company_logos"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <div id="company_slider" className="owl-carousel owl-theme">
                {serviceDetails?.trustedSection.trustBrand.map(
                  (brand, index) => {
                    return (
                      <div key={index} className="item">
                        <div className="logo">
                          <Image
                            width={300}
                            height={300}
                            src={brand}
                            alt="image"
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </section>
        {serviceDetails?.faqSection.faqs && (
          <section className="row_am faq_section">
            <div className="container">
              <div
                className="section_title"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                <h2
                  dangerouslySetInnerHTML={{
                    __html: serviceDetails?.faqSection.title ?? "",
                  }}
                ></h2>
                <p>{serviceDetails?.faqSection.description}</p>
              </div>
              <div className="faq_panel">
                <div className="accordion" id="accordionExample">
                  {serviceDetails?.faqSection.faqs.map((faq, index) => {
                    const first = index === 0;
                    return (
                      <div
                        key={index}
                        className="card"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <div
                          className="card-header"
                          id={`heading-${index + 1}`}
                        >
                          <h2 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link active"
                              data-toggle="collapse"
                              data-target={`#collapse-${index + 1}`}
                            >
                              <i className="icon_faq icofont-plus"></i>{" "}
                              {faq.question}
                            </button>
                          </h2>
                        </div>
                        <div
                          id={`collapse-${index + 1}`}
                          className={`collapse ${first ? "show" : ""}`}
                          aria-labelledby={`heading-${index + 1}`}
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="row_am interface_section">
          <div className="container-fluid">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <h2>{serviceDetails?.interfaceSection.title}</h2>
              <p>{serviceDetails?.interfaceSection.description}</p>
            </div>

            <div className="screen_slider">
              <div id="screen_slider" className="owl-carousel owl-theme">
                {serviceDetails?.interfaceSection.images.map((img, index) => {
                  return (
                    <div key={index} className="item">
                      <div className="screen_frame_img">
                        <Image width={300} height={300} src={img} alt="image" />
                      </div>
                    </div>
                  );
                })}
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
                      <h2>{serviceDetails?.freeAppSection.title}</h2>
                      <span className="text-white">
                        {serviceDetails?.freeAppSection.labelList}
                      </span>
                      <ul className="text-white list-group-cta">
                        {serviceDetails?.freeAppSection.freeAppList.map(
                          (freeItem, index) => {
                            return <li key={index}>{freeItem}</li>;
                          }
                        )}
                      </ul>
                    </div>
                    <ul className="app_btn ml-0">
                      <li>
                        <Link href="/contact">I want it !</Link>
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
              <h2>{serviceDetails?.latestStory.title}</h2>
              <p>{serviceDetails?.latestStory.labelList}</p>
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
