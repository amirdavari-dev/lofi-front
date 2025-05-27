import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import GetStarted from "@/components/Common/GetStarted";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";

export default function Page() {
  return (
    <>
      <NavbarStyle2 />
      
      <PageTitle homeText="Home" pageTitle="Service Details" />

      <ServiceDetailsContent />

      <GetStarted />

      <Footer />
    </>
  );
}
