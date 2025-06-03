"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogItem } from "../../../types/blogTypes";

const BlogCard = ({ image_name, title, description  , id}: BlogItem) => {
  const imagePath = process.env.NEXT_PUBLIC_BASE_URL + `/files/blog-images/${image_name}`;
  return (
    <article className="col-lg-4 col-md-6 col-sm-6">
      <div className="single-blog-post">
        <figure className="image">
          <Link href={`/blog/${id}/`} className="d-block">
            <Image
              src={imagePath}
              alt={`${title} | Blog`}
              width={760}
              height={900}
            />
          </Link>
          <span className="date">March 20, 2024</span>
        </figure>
        <div className="content">
          <h3>
            <Link href={`/blog/${id}/`}>{title}</Link>
          </h3>
          <p>{description}</p>

          <Link href={`/blog/${id}/`} className="default-btn">
            <span className="ri-arrow-right-s-line"></span>Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
