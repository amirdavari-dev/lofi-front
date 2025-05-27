import PageTitle from "@/components/Common/PageTitle";
import CaseStudiesCard3 from "@/components/CaseStudies/CaseStudiesCard3";
import GetStarted from "@/components/Common/GetStarted";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarStyle2 />
      {/* <PageTitle homeText="Home" pageTitle="Case Studies 3" /> */}

      <CaseStudiesCard3 />

      {/* <GetStarted /> */}

      <Footer />
    </>
  );
}
