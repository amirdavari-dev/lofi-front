import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarStyle2 />

      <BlogDetailsContent />

      <Footer />
    </>
  );
}
