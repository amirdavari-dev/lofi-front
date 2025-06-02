import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";
import BlogSidebar from "@/components/Blog/blogSidebar";
import { getBlog } from "../../../../utils/API/blogAPI";
import { BlogItem } from "../../../../types/blogTypes";
type Props = {
  params: Promise<{
    blog: string;
  }>;
};
export default async function Page({ params }: Props) {
  const { blog } = await params;
  const blogDetails: BlogItem = await getBlog({ blogId: +blog });

  return (
    <>
      {/* <Navbar /> */}
      <NavbarStyle2 />
      <main className="">
        {/* <div className="blog-details-area ptb-100 blog-custom" dangerouslySetInnerHTML={{ __html: blogDetails1 }}></div> */}
        {/* <BlogDetailsContent /> */}
        <div className="blog-container">
          <div
            dangerouslySetInnerHTML={{ __html: blogDetails.content }}
            className="blog-content"
          ></div>
          <BlogSidebar />
        </div>
      </main>

      <Footer />
    </>
  );
}
