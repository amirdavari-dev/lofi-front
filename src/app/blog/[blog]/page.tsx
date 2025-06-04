import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";
import BlogSidebar from "@/components/Blog/blogSidebar";
import { getBlog } from "../../../../utils/API/blogAPI";
import { BlogItem } from "../../../../types/blogTypes";
import Image from "next/image";
import Link from "next/link";
import PodcastLayout from "@/components/Blog/podcast/podcastLaout";
import { headers } from "next/headers";
type Props = {
  params: Promise<{
    blog: string;
  }>;
};
export default async function Page({ params }: Props) {
  const { blog } = await params;
  const header = await headers();
  const host = header.get("host");
  const blogDetails: BlogItem = await getBlog({ blogId: +blog });
  const blogDate = new Date(blogDetails.create_at);
  const year = blogDate.getFullYear();
  const month = String(blogDate.getMonth() + 1).padStart(2, "0");
  const day = String(blogDate.getDate()).padStart(2, "0");
  const formatBlogDate = `${year}-${month}-${day}`;
  const extension = blogDetails.audio_name.split(".").pop();

  const schemaPodcast = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: blogDetails.title_podcast,
    description: blogDetails.description_podcast,
    url: `http://${host}/blog/${blog}`,
    datePublished: formatBlogDate,
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl:
        process.env.NEXT_PUBLIC_BASE_URL +
        `/files/blog-audies/${blogDetails.audio_name}`,
      encodingFormat: `audio/${extension}`,
      // duration: "PT12M35S",
    },
    partOfSeries: {
      "@type": "PodcastSeries",
      name: blogDetails.category_podcast,
    },
    image:
      process.env.NEXT_PUBLIC_BASE_URL +
      `/files/blog-images/${blogDetails.cover_podcast}`,
    publisher: {
      "@type": "Organization",
      name: "RealReach",
      logo: {
        "@type": "ImageObject",
        url: `http://${host}/favicon.ico`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPodcast) }}
      />
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
