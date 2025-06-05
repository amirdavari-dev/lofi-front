import BlogCard from "@/components/Blog/BlogCard";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";
import { getBlogs } from "../../../utils/API/blogAPI";
import { BlogItem } from "../../../types/blogTypes";
import { headers } from "next/headers";
import dateFormater from "../../../utils/dateFormater";

export default async function Blog() {
  const blogs = ((await getBlogs()) as BlogItem[]) || [];
  const header = await headers();
  const host = header.get("host");

  const schemaBlogs = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Real Rich Blogs",
    description:
      "Discover expert articles and insights on finance, investing, and personal growth. Stay updated with the latest blog posts from Real Rich to elevate your financial knowledge.",
    url: `http://${host}/blog`,
    blogPost: blogs.map((blog) => {
      const publishDate = dateFormater(blog.create_at);
      return {
        "@type": "BlogPosting",
        headline: blog.title,
        url: `http://${host}/blog/${blog.id}`,
        datePublished: publishDate,
        author: {
          "@type": "Person",
          name: blog.author_podcast,
        },
      };
    }),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBlogs) }}
      ></script>
      {/* <Navbar /> */}
      {/* <PageTitle homeText="Home" pageTitle="Blog" /> */}
      <NavbarStyle2 />
      <main>
        <section className="blog-area ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              {blogs.map((blog) => {
                return <BlogCard key={blog.id} {...blog} />;
              })}
            </div>
          </div>
        </section>
      </main>

      {/* <GetStarted /> */}

      <Footer />
    </>
  );
}
