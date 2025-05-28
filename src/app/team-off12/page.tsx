import PageTitle from "@/components/Common/PageTitle";
import OurTeamMembers from "@/components/Team/OurTeamMembers";
import GetStarted from "@/components/Common/GetStarted";
import Footer from "@/components/Layouts/Footer";
import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";

export default function Page() {
  return (
    <>
      <NavbarStyle2 />

      {/* <PageTitle homeText="Home" pageTitle="Meet Our Leadership Team" /> */}

      <OurTeamMembers />

      {/* <GetStarted /> */}

      <Footer />
    </>
  );
}
