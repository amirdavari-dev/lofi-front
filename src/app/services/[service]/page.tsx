import React from "react";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";
import ServiceDetailsNew from "@/components/Services/serviceDetailsNew";
type Props = {
  params: Promise<{ service: string }>;
};
export default async function Page({ params }: Props) {
  const { service } = await params;
  return (
    <>
      <NavbarStyle2 />

      <ServiceDetailsNew service={service}/>

      {/* <PageTitle homeText="Home" pageTitle="Service Details" /> */}

      {/* <ServiceDetailsContent /> */}

      {/* <GetStarted /> */}

      <Footer />
    </>
  );
}
