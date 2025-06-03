import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";
import BlogSidebar from "@/components/Blog/blogSidebar";
import { getBlog } from "../../../../utils/API/blogAPI";
import { BlogItem } from "../../../../types/blogTypes";
import Image from "next/image";
import Link from "next/link";
import PodcastLayout from "@/components/Blog/podcast/podcastLaout";
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
      <main>
        {/* <div className="blog-details-area ptb-100 blog-custom" dangerouslySetInnerHTML={{ __html: blogDetails1 }}></div> */}
        {/* <BlogDetailsContent /> */}
        <div className="blog-container">
          <div className="blog-content">
            <section className="blog-first-section">
              <p className="social-agents">
                Blog /How to Create the Best Social Media Content for Real
                Estate Agents?
              </p>
              <figure className="realrich-blog-enjoy">
                <Image
                  width={55}
                  height={55}
                  src="/images/blog/real-rich-logo.png"
                  alt="Real Rich Logo"
                />
                <figcaption className="realrich-blog-enjoy-figcaption">
                  <p>I hope you enjoy reading this blog post.</p>
                  <p>
                    If you want my team to just do your marketing for you, 
                    <Link href="#">click here.</Link>
                  </p>
                </figcaption>
              </figure>
            </section>
            <h4 className="target-head">
              How to Create the Best Social Media Content for Real Estate
              Agents?
            </h4>
            <PodcastLayout podcastSrc={blogDetails.audio_name} />
            <div
              dangerouslySetInnerHTML={{ __html: blogDetails.content }}
            ></div>
          </div>
          <BlogSidebar />
        </div>
      </main>

      <Footer />
    </>
  );
}
