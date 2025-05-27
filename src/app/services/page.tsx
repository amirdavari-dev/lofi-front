import PageTitle from "@/components/Common/PageTitle";
import ServicesItem from "../../components/Services/ServicesItem";
import OurCaseStudies from "@/components/Common/OurCaseStudies";
import WorkProcess from "@/components/Common/WorkProcess";
import PartnerSlider from "@/components/Common/PartnerSlider";
import PricingTable from "@/components/Pricing/PricingTable";
import Faq from "@/components/Common/Faq";
import GetStarted from "@/components/Common/GetStarted";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";

export default function Page() {
  return (
    <>
      <NavbarStyle2 />

      <PageTitle homeText="Home" pageTitle="Services" />

      <ServicesItem />

      <GetStarted />

      <OurCaseStudies />

      <WorkProcess />

      <PartnerSlider />

      <div className="bg-f9f9f9 border-bottom">
        <PricingTable />
      </div>

      <Faq />

      <Footer />
    </>
  );
}
