import BlogCard from "@/components/Blog/BlogCard";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";
import { getBlogs } from "../../../utils/API/blogAPI";
import { BlogItem } from "../../../types/blogTypes";

export default async function Blog() {
  const blogs = ((await getBlogs()) as BlogItem[]) || [];
  return (
    <>
      {/* <Navbar /> */}
      <NavbarStyle2 />
      {/* <PageTitle homeText="Home" pageTitle="Blog" /> */}
      <section className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {blogs.map((blog) => {
              return <BlogCard key={blog.id} {...blog} />;
            })}
          </div>
        </div>
      </section>

      {/* <GetStarted /> */}

      <Footer />
    </>
  );
}
