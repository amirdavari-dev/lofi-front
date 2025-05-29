import React from "react";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";
import ServiceDetailsNew from "@/components/Services/serviceDetailsNew";

export default function Page() {
  return (
    <>
      <NavbarStyle2 />

      <ServiceDetailsNew />

      {/* <PageTitle homeText="Home" pageTitle="Service Details" /> */}

      {/* <ServiceDetailsContent /> */}

      {/* <GetStarted /> */}

      <Footer />
    </>
  );
}
