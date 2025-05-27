import AboutContent from "@/components/AboutUs/AboutContent";
import PartnerArea from "@/components/TechnologySolutions/PartnerArea";
import Process from "@/components/AboutUs/Process";
import ClientsFeedbackStyle2 from "@/components/Common/ClientsFeedbackStyle2";
import TeamSlider from "@/components/Common/TeamSlider";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarStyle2 />

      {/* <PageTitle homeText="Home" pageTitle="About Us" /> */}

      <AboutContent />

      <PartnerArea />

      <div className="ptb-100">
        <Process />
      </div>

      <ClientsFeedbackStyle2 />

      <TeamSlider />

      {/* <GetStarted /> */}

      <Footer />
    </>
  );
}
