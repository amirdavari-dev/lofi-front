"use client";
import Image from "next/image";
import HeaderSidebar from "./headerSidebar";
import TableOfContents from "./tableOfContents";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <aside className="blog-sidebar">
      <section className="first-section">
        <h4 className="sidebar-header">
          Table of contents <br />
          <span></span>
        </h4>
        <TableOfContents />
      </section>
      <section className="second-section">
        <HeaderSidebar>About RealReach </HeaderSidebar>
        <p className="explain-realrich">
          <strong>RealReach : </strong>Digital Marketing Agency For Revenue
          Growth
        </p>
        <p className="explain-realrich">
          Our award-winning strategies deliver real business results for
          Enterprises and SMBs. We believe that all marketing should unlock more
          revenue and business growth.
        </p>
        <div className="company-logo-container">
          <figure>
            <Image
              width={32}
              height={12}
              src="/images/blog/award4 1.png"
              alt="Property turkey logo"
            />
          </figure>
          <figure>
            <Image
              width={58}
              height={8}
              src="/images/blog/Vector.png"
              alt="Damac logo"
            />
          </figure>
          <figure>
            <Image
              width={39}
              height={16}
              src="/images/blog/Clip path group.png"
              alt="Savils logo"
            />
          </figure>
          <figure>
            <Image
              width={45}
              height={19}
              src="/images/blog/MERED.png"
              alt="Mered logo"
            />
          </figure>
        </div>
        <Link className="sidebar-link" href="/about-us">
          Learn more about RealReach{" "}
          <Image
            width={18}
            height={13}
            src="/images/blog/arrow.svg"
            alt="arrow icon"
          />
        </Link>
      </section>
      <section className="third-section">
        <div className="header-case-study">
          <HeaderSidebar>Case Studies</HeaderSidebar>
          <figure>
            <Image
              width={69}
              height={26}
              src="/images/blog/award4 1.png"
              alt="Property Turkey | Case Study"
            />
          </figure>
        </div>
        <p className="explain-case-study">
          One of Turkey’s leading platforms for international property buyers,
          Property Turkey partnered with us to scale qualified leads, build SEO
          authority, and launch conversion-driven ad campaigns. Together, we
          built a system that turned their website into a lead-generation
          machine—boosting both visibility and revenue.
        </p>
        <Link className="sidebar-link" href="/case-studies/property-turkey/">
          Read case studie for PropertyTurkey{" "}
          <Image
            width={18}
            height={13}
            src="/images/blog/arrow.svg"
            alt="arrow icon"
          />
        </Link>
      </section>
      <section className="fourth-section">
        <HeaderSidebar>Learn more</HeaderSidebar>
        <ul className="learn-more-links">
          <li>
            <Link href="/about-us">
              <span className="learn-more-link-shape">
                <span></span>
              </span>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services">
              <span className="learn-more-link-shape">
                <span></span>
              </span>
              Services
            </Link>
          </li>
          <li>
            <Link href="/case-studies">
              <span className="learn-more-link-shape">
                <span></span>
              </span>
              Case Studies
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
};
export default BlogSidebar;
