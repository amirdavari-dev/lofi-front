import PageTitle from "@/components/Common/PageTitle";
import BlogCard from "@/components/Blog/BlogCard";
import GetStarted from "@/components/Common/GetStarted";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";

export default function Blog() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarStyle2 />
      <PageTitle homeText="Home" pageTitle="Blog" />

      <BlogCard />

      <GetStarted />

      <Footer />
    </>
  );
}
